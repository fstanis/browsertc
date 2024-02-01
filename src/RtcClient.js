import { RtcBase, RtcState } from './RtcBase';

export class RtcClient extends RtcBase {
  id;
  #signal;
  #lastOffer = 0;

  constructor(config, signal) {
    super(config);
    this.#signal = signal;
    this.connection.ondatachannel = (event) => {
      this.channel = event.channel;
    };
    this.connection.onicecandidate = async (event) => {
      if (this.id) {
        await this.#signal.setAnswer(
          this.id,
          event.target.localDescription.sdp
        );
        console.log('sent new answer');
      }
    };
  }

  async connect(id) {
    if (this.id) {
      return;
    }
    this.id = id;
    this.#waitForOffer();
  }

  #waitForOffer = async () => {
    if (!this.id) {
      return;
    }
    if (this.state !== RtcState.CONNECTED) {
      const offer = await this.#signal.getOffer(this.id);
      if (!offer) {
        this.#lastOffer = 0;
      }
      if (offer && offer.timestamp > this.#lastOffer) {
        this.#lastOffer = offer.timestamp;
        await this.connection.setRemoteDescription({
          sdp: offer.sdp,
          type: 'offer',
        });
        const answer = await this.connection.createAnswer();
        await this.connection.setLocalDescription(answer);
        console.log('got new offer');
      }
    }
    setTimeout(this.#waitForOffer, 5000);
  };
}
