import { RtcBase } from './RtcBase';

export class RtcServer extends RtcBase {
  id;
  #lastAnswer = 0;
  #needsIceRestart = false;
  #signal;

  constructor(config, signal) {
    super(config);
    this.#signal = signal;
    this.connection.onnegotiationneeded = async (event) => {
      const offer = await event.target.createOffer();
      await event.target.setLocalDescription(offer);
    };
    this.connection.onconnectionstatechange = async (event) => {
      if (event.target.connectionState === 'failed') {
        if (this.#needsIceRestart) {
          await this.#restart();
        }
      } else if (event.target.connectionState === 'connected') {
        this.#needsIceRestart = true;
      }
    };
    this.connection.onicecandidate = async (event) => {
      if (this.id) {
        await this.#signal.setOffer(this.id, event.target.localDescription.sdp);
      }
    };
  }

  start(id) {
    if (this.id) {
      return;
    }
    this.id = id;
    this.#createChannel();
    this.#waitForAnswer();
  }

  async #restart() {
    this.#needsIceRestart = false;
    this.#createChannel();
    const offer = await this.connection.createOffer({ iceRestart: true });
    await this.connection.setLocalDescription(offer);
  }

  #createChannel() {
    this.channel = this.connection.createDataChannel('data', {
      ordered: false,
    });
  }

  #waitForAnswer = async () => {
    if (!this.id) {
      return;
    }
    if (this.connection.signalingState === 'have-local-offer') {
      const answer = await this.#signal.getAnswer(this.id);
      if (answer && answer.timestamp > this.#lastAnswer) {
        this.#lastAnswer = answer.timestamp;
        await this.connection.setRemoteDescription({
          sdp: answer.sdp,
          type: 'answer',
        });
      }
    }
    setTimeout(this.#waitForAnswer, 5000);
  };
}
