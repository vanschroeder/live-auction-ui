import { Component, OnInit, OnDestroy } from "@angular/core";
import { BiddingService } from "./bidding.service";

@Component({
    selector: "bidding-component",
    templateUrl: "src/bidding/bidding.component.html"

})

export class BiddingComponent implements OnInit, OnDestroy {
    currentBid: number = 0.00;
    connection : any;

    constructor(private biddingService : BiddingService) {
        console.log("constructor");
        this.connection = this.biddingService.getBids().subscribe(bid => {
            console.log("currentBid " + bid);
            this.currentBid = Number(bid);
        });
    }

    sendBid = () => {
        this.biddingService.sendBid(this.currentBid + 1.00);
    }

    ngOnInit = () => {
        console.log("init getBids");

    }

    ngOnDestroy = () => {
        this.connection.unsubscribe();
    }
}
