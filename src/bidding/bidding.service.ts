import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import * as io from "socket.io-client";

@Injectable()
export class BiddingService {
    private url : string = "http://localhost:3000";
    private socket : any = io(this.url, {autoConnect: false});

    joinAuction = (username : string) => {
        let observable : any = new Observable(observer => {

            this.socket.on("connect", (data : any) => {
               this.socket.emit("username", username);
            });

            this.socket.on("accessGranted", (data : any) => {
                observer.next({authed: true});
            });

            this.socket.on("auctionFull", (data : any) => {
                this.socket.disconnect();
                observer.next({authed: false});
            });

            this.socket.on("disconnected", (data : any) => {
                observer.next({authed: false});
            });

            return () => {
                this.socket.disconnect();
            };
        });
        this.socket.open();
        return observable;
    }

    leaveAuction = () => {
        this.socket.disconnect();
    }

    sendBid = (bid : number) => {
        console.log("bid " + bid);
        this.socket.emit("bid", bid);
    }

    getBids = () => {
        let observable : any = new Observable(observer => {
            this.socket.on("bidUpdate", (data : any) => {
                console.log("bidUpdate: " + data);
                observer.next(data);
            });
        });
        this.socket.emit("bidStatus", null);
        return observable;
    }

    getBidders = () => {
        let observable : any = new Observable(observer => {
            this.socket.on("biddersCount", (data: any) => {
                observer.next(data);
            });
        });
        return observable;
    }
}
