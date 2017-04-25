"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var auction_component_1 = require("./auction.component");
/// <reference path="dashjs/index.d.ts" />
var LiveAuctionUiModule = LiveAuctionUiModule_1 = (function () {
    function LiveAuctionUiModule() {
    }
    LiveAuctionUiModule.forRoot = function () {
        return {
            ngModule: LiveAuctionUiModule_1
        };
    };
    return LiveAuctionUiModule;
}());
LiveAuctionUiModule = LiveAuctionUiModule_1 = __decorate([
    core_1.NgModule({
        declarations: [
            auction_component_1.AuctionComponent
        ],
        imports: [
            common_1.CommonModule
        ],
        exports: [
            auction_component_1.AuctionComponent
        ]
    })
], LiveAuctionUiModule);
exports.LiveAuctionUiModule = LiveAuctionUiModule;
var LiveAuctionUiModule_1;
//# sourceMappingURL=live-auction-ui.module.js.map