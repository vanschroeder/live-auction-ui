import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import * as io from "socket.io-client";

@Injectable()
export class BiddingService {
    private url : string = "http://localhost:3000";
    private socket : any = io(this.url);

    joinAuction = (username : string) => {
        let observable : any = new Observable(observer => {

            this.socket.on("connect", (data) => {
               this.socket.emit("username", username);
            });

            this.socket.on("accessGranted", (data) => {
                observer.next({authed: true});
            });

            this.socket.on("auctionFull", (data) => {
                this.socket.disconnect();
                observer.next({authed: false});
            });

            this.socket.on("disconnected", (data) => {
                observer.next({authed: false});
            });
        });
        return observable;
    }

    leaveAuction = () => {
        this.socket.disconnect();
    }

    sendBid = (bid : number) => {
        this.socket.emit("bid", bid);
    }

    getBids = () => {
        let observable : any = new Observable(observer => {
            this.socket.on("bidUpdate", (data : any) => {
                observer.next(data);
            });
            this.socket.on("biddersCount", (data : any) => {
                observer.next(data);
            });

            return () => {
                this.socket.disconnect();
            };
        });

        return observable;
    }
}
