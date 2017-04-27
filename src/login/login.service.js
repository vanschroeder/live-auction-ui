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
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("rxjs/Subject");
var core_1 = require("@angular/core");
var bidding_service_1 = require("../bidding/bidding.service");
var LoginService = (function () {
    function LoginService(biddingService) {
        var _this = this;
        this.biddingService = biddingService;
        this.authChangeSource = new Subject_1.Subject();
        this.authChange$ = this.authChangeSource.asObservable();
        this.joinAuction = function (username) {
            _this.biddingService.joinAuction(username).subscribe(function (event) {
                console.log("subbing to joinAuction event: " + event["authed"]);
                _this.isAuthorized = event["authed"];
                _this.authChangeSource.next(_this.isAuthorized);
            });
        };
        this.leaveAuction = function () {
            _this.biddingService.leaveAuction();
        };
    }
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(bidding_service_1.BiddingService)),
    __metadata("design:paramtypes", [bidding_service_1.BiddingService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map