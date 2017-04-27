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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var core_2 = require("videogular2/core");
var controls_1 = require("videogular2/controls");
var overlay_play_1 = require("videogular2/overlay-play");
var buffering_1 = require("videogular2/buffering");
var auction_ui_component_1 = require("./auction-ui.component");
var bidding_component_1 = require("./bidding/bidding.component");
var login_component_1 = require("./login/login.component");
var login_service_1 = require("./login/login.service");
var bidding_service_1 = require("./bidding/bidding.service");
var AuctionUiModule = (function () {
    function AuctionUiModule() {
    }
    AuctionUiModule.forRoot = function () {
        return {
            ngModule: AuctionUiModule
        };
    };
    AuctionUiModule = __decorate([
        core_1.NgModule({
            declarations: [
                auction_ui_component_1.AuctionUiComponent,
                login_component_1.LoginComponent,
                bidding_component_1.BiddingComponent
            ],
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                core_2.VgCoreModule,
                controls_1.VgControlsModule,
                overlay_play_1.VgOverlayPlayModule,
                buffering_1.VgBufferingModule
            ],
            exports: [
                auction_ui_component_1.AuctionUiComponent
            ],
            providers: [
                login_service_1.LoginService,
                bidding_service_1.BiddingService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AuctionUiModule);
    return AuctionUiModule;
}());
exports.AuctionUiModule = AuctionUiModule;
//# sourceMappingURL=auction-ui.module.js.map