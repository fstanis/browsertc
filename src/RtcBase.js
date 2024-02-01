export const RtcState = Object.freeze({
  INACTIVE: Symbol('inactive'),
  CONNECTING: Symbol('connecting'),
  CONNECTED: Symbol('connected'),
});

class RtcStateEvent extends Event {
  state;

  constructor(state) {
    super('state');
    this.state = state;
  }
}

class RtcMessageEvent extends Event {
  data;

  constructor(data) {
    super('message');
    this.data = data;
  }
}

export class RtcBase extends EventTarget {
  connection;
  #state = RtcState.INACTIVE;
  #channel;

  constructor(config) {
    super();
    this.connection = this.#createPeer(config);
  }

  get state() {
    return this.#state;
  }

  set state(value) {
    if (this.#state != value) {
      this.#state = value;
      this.dispatchEvent(new RtcStateEvent(value));
    }
  }

  get channel() {
    return this.#channel;
  }

  set channel(value) {
    if (this.#channel) {
      this.#channel.close();
    }
    this.#channel = value;
    this.#channel.addEventListener('open', this.#updateConnectionState);
    this.#channel.addEventListener('close', this.#updateConnectionState);
    this.#channel.addEventListener('closing', this.#updateConnectionState);
    this.#channel.addEventListener('error', this.#updateConnectionState);
    this.#channel.addEventListener('message', (event) =>
      this.dispatchEvent(new RtcMessageEvent(event.data))
    );
  }

  sendMessage(message) {
    if (!this.#channel || this.#channel.readyState !== 'open') {
      return false;
    }
    this.#channel.send(message);
    return true;
  }

  close() {
    if (this.#channel) {
      this.#channel.close();
    }
    this.connection.close();
  }

  async recreate() {
    this.close();
    const config = await this.connection.getConfiguration();
    this.connection = this.#createPeer(config);
  }

  #createPeer(config) {
    const peer = new RTCPeerConnection(config);
    peer.addEventListener('connectionstatechange', () => {
      console.log(`Connection state: ${event.target.connectionState}`);
      this.#updateConnectionState();
    });
    peer.addEventListener('icegatheringstatechange', () => {
      console.log(`ICE state: ${event.target.iceGatheringState}`);
    });
    peer.addEventListener('datachannel', this.#updateConnectionState);
    peer.onsignalingstatechange = async (event) => {
      console.log(`Signal state: ${event.target.signalingState}`);
    };
    return peer;
  }

  #getState() {
    switch (this.connection.connectionState) {
      case 'closed':
      case 'new':
      case 'disconnected':
      case 'failed':
        return RtcState.INACTIVE;
      case 'connected':
        if (this.#channel && this.#channel.readyState === 'open') {
          return RtcState.CONNECTED;
        } else {
          return RtcState.CONNECTING;
        }
      case 'connecting':
        return RtcState.CONNECTING;
    }
  }

  #updateConnectionState = () => {
    this.state = this.#getState();
  };
}
