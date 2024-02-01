const OFFER_PREFIX = 'offer-';
const ANSWER_PREFIX = 'answer-';

export class WebDavSignal {
  #url;
  #headers = new Headers();
  #parser = new DOMParser();

  constructor(creds) {
    let url = creds.url;
    if (!url.endsWith('/')) {
      url = url + '/';
    }
    this.#url = new URL(url);
    if (creds) {
      const { username, password } = creds;
      const authorization = `Basic ${btoa(`${username}:${password}`)}`;
      this.#headers.append('Authorization', authorization);
    }
  }

  async getOffer(id) {
    return this.#getFile(`${OFFER_PREFIX}${id}`);
  }

  async setOffer(id, data) {
    try {
      await this.#deleteFile(`${ANSWER_PREFIX}${id}`);
    } catch (_) {}
    return this.#putFile(`${OFFER_PREFIX}${id}`, data);
  }

  async getAnswer(id) {
    return this.#getFile(`${ANSWER_PREFIX}${id}`);
  }

  async setAnswer(id, data) {
    return this.#putFile(`${ANSWER_PREFIX}${id}`, data);
  }

  async listActiveIds() {
    await this.#cleanup();
    const files = await this.#listFiles();
    return files
      .filter(({ name }) => name.startsWith(OFFER_PREFIX))
      .sort((f1, f2) => {
        const timestamp1 = f1.timestamp;
        const timestamp2 = f2.timestamp;
        return timestamp2 - timestamp1;
      })
      .map(({ name }) => name.replace(OFFER_PREFIX, ''));
  }

  async #getFile(name) {
    const fileUrl = new URL(name, this.#url);
    try {
      const res = await fetch(fileUrl, { headers: this.#headers });
      return {
        timestamp: new Date(res.headers.get('Last-Modified')).getTime(),
        sdp: await res.text(),
      };
    } catch (_) {
      return null;
    }
  }

  async #putFile(name, data) {
    const fileUrl = new URL(name, this.#url);
    const headers = new Headers(this.#headers);
    headers.set('Content-Type', 'text/plain');
    await fetch(fileUrl, { method: 'PUT', body: data, headers });
  }

  async #deleteFile(name) {
    const fileUrl = new URL(name, this.#url);
    await fetch(fileUrl, { method: 'DELETE', headers: this.#headers });
  }

  async #listFiles() {
    const headers = new Headers(this.#headers);
    headers.set('Content-Type', 'text/xml');
    const res = await fetch(this.#url, {
      method: 'PROPFIND',
      body: '<?xml version="1.0"?><D:propfind xmlns:D="DAV:"><D:prop><D:resourcetype/><D:getlastmodified/></D:prop></D:propfind>',
      headers,
    });
    const xml = await res.text();
    const xmlDoc = this.#parser.parseFromString(xml, 'text/xml');
    const out = [];
    const pathPrefix = this.#url.pathname;
    for (const response of xmlDoc.getElementsByTagNameNS('DAV:', 'response')) {
      if (
        response.querySelector('propstat > prop > resourcetype > collection')
      ) {
        continue;
      }
      let href = response.querySelector('href').textContent.trim();
      if (!href.startsWith(pathPrefix)) {
        continue;
      }
      href = href.replace(pathPrefix, '');
      if (href.indexOf('/') > -1) {
        continue;
      }
      const lastModified = response
        .querySelector('propstat > prop > getlastmodified')
        .textContent.trim();
      out.push({
        name: href,
        timestamp: new Date(lastModified).getTime(),
      });
    }
    return out;
  }

  async #cleanup() {
    const files = await this.#listFiles();
    const promises = [];
    for (const { name, timestamp } of files) {
      if (!name.startsWith(OFFER_PREFIX) && !name.startsWith(ANSWER_PREFIX)) {
        continue;
      }
      if (Date.now() - timestamp > 60 * 60 * 1000) {
        promises.push(this.#deleteFile(name));
      }
    }
    await Promise.all(promises);
  }
}
