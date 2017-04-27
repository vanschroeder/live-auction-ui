import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { Inject } from '@angular/core';
import { BiddingService } from "../bidding/bidding.service";

export class LoginService {
    constructor(@Inject(BiddingService) private biddingService) {}
    public isAuthorized: boolean;
    joinAuction(username) {
        this.biddingService.joinAuction(username).subscribe((event) => {
            this.isAuthorized = event["authed"];
            console.log("isAuthorized: "+ this.isAuthorized);
        });
    }

    leaveAuction() {
        this.biddingService.leaveAuction()
    }
}