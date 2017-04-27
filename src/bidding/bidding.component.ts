import { Component, OnInit,OnDestroy } from "@angular/core";
import { BiddingService } from "./bidding.service";

@Component({
    selector: "bidding-component",
    templateUrl: "src/bidding/bidding.component.html",
    providers: [BiddingService]
})

export class BiddingComponent implements OnInit, OnDestroy {
    currentBid: number = 0.00;
    connection;

    constructor(private biddingService:BiddingService) {}

    sendBid(){
        this.biddingService.sendBid(this.currentBid+1.00);
    }

    ngOnInit() {
        this.connection = this.biddingService.getBids().subscribe(bid => {
            console.log(bid)
            this.currentBid = Number(bid)
        })
    }

    ngOnDestroy() {
        this.connection.unsubscribe();
    }
}
