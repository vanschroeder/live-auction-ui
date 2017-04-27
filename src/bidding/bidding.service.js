"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Observable_1 = require("rxjs/Observable");
var io = require("socket.io-client");
var BiddingService = (function () {
    function BiddingService() {
        this.url = "http://localhost:3000";
    }
    BiddingService.prototype.joinAuction = function (username) {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            _this.socket = io(_this.url);
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
        });
        return observable;
    };
    BiddingService.prototype.leaveAuction = function () {
        this.socket.disconnect();
    };
    BiddingService.prototype.sendBid = function (bid) {
        this.socket.emit("bid", bid);
    };
    BiddingService.prototype.getBids = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            _this.socket.on("bidUpdate", function (data) {
                observer.next(data);
            });
            _this.socket.on("biddersCount", function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    BiddingService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BiddingService);
    return BiddingService;
}());
exports.BiddingService = BiddingService;
//# sourceMappingURL=bidding.service.js.map