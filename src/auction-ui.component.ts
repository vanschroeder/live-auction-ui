import { Component, OnDestroy } from "@angular/core";
import { LoginService } from "./login/login.service";
import { BiddingService } from "./bidding/bidding.service";
import { Subscription }   from "rxjs/Subscription";
import { Injectable } from "@angular/core";


@Component({
    selector: "auction-ui",
    templateUrl: "src/auction-ui.component.html",

})

@Injectable()
export class AuctionUiComponent implements OnDestroy {
    public isAuthenticated: boolean;
    _subscription: Subscription;

    constructor(private loginservice : LoginService, private biddingservice : BiddingService) {
        this.isAuthenticated = loginservice.isAuthorized;
        this._subscription = loginservice.authChange$.subscribe((value) => {
            this.isAuthenticated = value;
            if (this.isAuthenticated) {
                this.biddingservice.getBids();
            }
        });
    }

    ngOnDestroy = () : void =>  {
        // prevent memory leak when component destroyed
        this._subscription.unsubscribe();
    }
}
