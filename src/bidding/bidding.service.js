"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var io = require("socket.io-client");
var BiddingService = (function () {
    function BiddingService() {
        var _this = this;
        this.url = "http://localhost:3000";
        this.socket = io(this.url, { autoConnect: false });
        this.joinAuction = function (username) {
            var observable = new Observable_1.Observable(function (observer) {
                _this.socket.on("connect", function (data) {
                    _this.socket.emit("username", username);
                });
                _this.socket.on("accessGranted", function (data) {
                    observer.next({ authed: true });
                });
                _this.socket.on("auctionFull", function (data) {
                    _this.socket.disconnect();
                    observer.next({ authed: false });
                });
                _this.socket.on("disconnected", function (data) {
                    observer.next({ authed: false });
                });
                return function () {
                    _this.socket.disconnect();
                };
            });
            _this.socket.open();
            return observable;
        };
        this.leaveAuction = function () {
            _this.socket.disconnect();
        };
        this.sendBid = function (bid) {
            console.log("bid " + bid);
            _this.socket.emit("bid", bid);
        };
        this.getBids = function () {
            var observable = new Observable_1.Observable(function (observer) {
                _this.socket.on("bidUpdate", function (data) {
                    console.log("bidUpdate: " + data);
                    observer.next(data);
                });
            });
            _this.socket.emit("bidStatus", null);
            return observable;
        };
        this.getBidders = function () {
            var observable = new Observable_1.Observable(function (observer) {
                _this.socket.on("biddersCount", function (data) {
                    observer.next(data);
                });
            });
            return observable;
        };
    }
    return BiddingService;
}());
BiddingService = __decorate([
    core_1.Injectable()
], BiddingService);
exports.BiddingService = BiddingService;
//# sourceMappingURL=bidding.service.js.map