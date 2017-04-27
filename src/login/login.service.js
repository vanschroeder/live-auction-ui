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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var bidding_service_1 = require("../bidding/bidding.service");
var LoginService = (function () {
    function LoginService(biddingService) {
        this.biddingService = biddingService;
    }
    LoginService.prototype.joinAuction = function (username) {
        var _this = this;
        this.biddingService.joinAuction(username).subscribe(function (event) {
            _this.isAuthorized = event["authed"];
            console.log("isAuthorized: " + _this.isAuthorized);
        });
    };
    LoginService.prototype.leaveAuction = function () {
        this.biddingService.leaveAuction();
    };
    LoginService = __decorate([
        __param(0, core_1.Inject(bidding_service_1.BiddingService)), 
        __metadata('design:paramtypes', [Object])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map