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
var core_2 = require("@angular/core");
var AuctionUiComponent = (function () {
    function AuctionUiComponent(loginservice) {
        var _this = this;
        this.loginservice = loginservice;
        this.ngOnDestroy = function () {
            // prevent memory leak when component destroyed
            _this._subscription.unsubscribe();
        };
        this.isAuthenticated = loginservice.isAuthorized;
        this._subscription = loginservice.authChange$.subscribe(function (value) {
            console.log("auth changed " + value);
            _this.isAuthenticated = value;
        });
    }
    return AuctionUiComponent;
}());
AuctionUiComponent = __decorate([
    core_1.Component({
        selector: "auction-ui",
        templateUrl: "src/auction-ui.component.html",
        providers: [login_service_1.LoginService]
    }),
    core_2.Injectable(),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], AuctionUiComponent);
exports.AuctionUiComponent = AuctionUiComponent;
//# sourceMappingURL=auction-ui.component.js.map