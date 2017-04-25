import { Component } from "@angular/core";

@Component({
  selector: "LiveAuction-auction-ui",
  templateUrl: "./src/auction.component.html"
})

export class AuctionComponent {
  stream_src: string = "http://dash.edgesuite.net/envivio/EnvivioDash3/manifest.mpd";
}
