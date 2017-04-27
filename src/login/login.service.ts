import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { Inject, Injectable } from "@angular/core";
import { BiddingService } from "../bidding/bidding.service";

@Injectable()
export class LoginService {
    authChangeSource: Subject<boolean> = new Subject<boolean>();

    public isAuthorized: boolean;
    public authChange$ : any = this.authChangeSource.asObservable();

    joinAuction = (username : string) => {
        this.biddingService.joinAuction(username).subscribe((event : any) => {
            console.log("subbing to joinAuction event: " + event["authed"]);
            this.isAuthorized = event["authed"];
            this.authChangeSource.next(this.isAuthorized);
        });
    }

    leaveAuction = () => {
        this.biddingService.leaveAuction();
    }

    constructor(@Inject(BiddingService) private biddingService : BiddingService) {}
}