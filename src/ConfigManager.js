import { generateDeviceId } from './deviceId';

export class ConfigManager {
  #config;

  set webDavUrl(value) {
    this.#config.webDavUrl = value;
    this.#save();
  }

  get webDavUrl() {
    this.#load();
    return this.#config.webDavUrl;
  }

  set webDavUsername(value) {
    this.#config.webDavUsername = value;
    this.#save();
  }

  get webDavUsername() {
    this.#load();
    return this.#config.webDavUsername;
  }

  set webDavPassword(value) {
    this.#config.webDavPassword = value;
    this.#save();
  }

  get webDavPassword() {
    this.#load();
    return this.#config.webDavPassword;
  }

  set deviceId(value) {
    this.#config.deviceId = value;
    this.#save();
  }

  get deviceId() {
    this.#load();
    return this.#config.deviceId;
  }

  set meteredApiKey(value) {
    this.#config.meteredApiKey = value;
    this.#save();
  }

  get meteredApiKey() {
    this.#load();
    return this.#config.meteredApiKey;
  }

  get webDavCreds() {
    this.#load();
    return {
      url: this.#config.webDavUrl,
      username: this.#config.webDavUsername,
      password: this.#config.webDavPassword,
    };
  }

  get isValid() {
    this.#load();
    return (
      this.#isValidUrl(this.#config.webDavUrl) &&
      this.#config.deviceId !== '' &&
      this.#config.meteredApiKey !== ''
    );
  }

  #isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  }

  #load() {
    this.#config = JSON.parse(localStorage.getItem('config'));
    if (!this.#config) {
      this.#config = {
        webDavUrl: '',
        webDavUsername: '',
        webDavPassword: '',
        deviceId: generateDeviceId(),
        meteredApiKey: '',
      };
      this.#save();
    }
  }

  #save() {
    localStorage.setItem('config', JSON.stringify(this.#config));
  }
}
