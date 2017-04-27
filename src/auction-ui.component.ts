import { Component, OnDestroy } from "@angular/core";
import { LoginService } from "./login/login.service";
import { Subscription }   from "rxjs/Subscription";
import { Injectable } from "@angular/core";


@Component({
    selector: "auction-ui",
    templateUrl: "src/auction-ui.component.html",
    providers: [LoginService]
})

@Injectable()
export class AuctionUiComponent implements OnDestroy {
    public isAuthenticated: boolean;
    _subscription: Subscription;

    constructor(private loginservice : LoginService) {
        this.isAuthenticated = loginservice.isAuthorized;
        this._subscription = loginservice.authChange$.subscribe((value) => {
            console.log("auth changed " + value);
            this.isAuthenticated = value;
        });
    }

    ngOnDestroy = () : void =>  {
        // prevent memory leak when component destroyed
        this._subscription.unsubscribe();
    }
}
