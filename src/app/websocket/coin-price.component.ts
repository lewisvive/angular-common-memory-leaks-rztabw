import { Component, Input } from "@angular/core";
import { Subject } from "rxjs";

const Endpoint = "wss://ws.coincap.io/prices/";

@Component({
  selector: "coin-price",
  template: `
    {{ id | titlecase }}: {{ (price$ | async) || "loading..." }}
  `
})
export class CoinPriceComponent {
  @Input() id: string;

  public price$ = new Subject();

  private webSocket: WebSocket;

  ngOnInit() {
    const id = this.id;
    this.webSocket = new WebSocket(this.getEndpoint(id));

    this.webSocket.onmessage = (msg: MessageEvent) => {
      const data = JSON.parse(msg.data);
      let price = data[id];
      console.log(`${id}: ${price}`)
      this.price$.next(price);
    };
  }

  ngOnDestroy() {
    //Remove this line to see memory leak happen.
    this.webSocket.close();
  }

  private getEndpoint(id: string) {
    return `${Endpoint}?assets=${id}`;
  }
}
