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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var login_service_1 = require("./login/login.service");
var bidding_service_1 = require("./bidding/bidding.service");
var core_2 = require("@angular/core");
var AuctionUiComponent = (function () {
    function AuctionUiComponent(loginservice, biddingservice) {
        var _this = this;
        this.loginservice = loginservice;
        this.biddingservice = biddingservice;
        this.ngOnDestroy = function () {
            // prevent memory leak when component destroyed
            _this._subscription.unsubscribe();
        };
        this.isAuthenticated = loginservice.isAuthorized;
        this._subscription = loginservice.authChange$.subscribe(function (value) {
            _this.isAuthenticated = value;
            if (_this.isAuthenticated) {
                _this.biddingservice.getBids();
            }
        });
    }
    return AuctionUiComponent;
}());
AuctionUiComponent = __decorate([
    core_1.Component({
        selector: "auction-ui",
        templateUrl: "src/auction-ui.component.html",
    }),
    core_2.Injectable(),
    __metadata("design:paramtypes", [login_service_1.LoginService, bidding_service_1.BiddingService])
], AuctionUiComponent);
exports.AuctionUiComponent = AuctionUiComponent;
//# sourceMappingURL=auction-ui.component.js.map