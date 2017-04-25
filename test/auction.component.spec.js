"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var chai_1 = require("chai");
var auction_component_1 = require("../src/auction.component");
var src_1 = require("../src");
describe("LiveAuction-hello-world component", function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                src_1.LiveAuctionUiModule.forRoot()
            ]
        });
    });
    it("should say hello world", function () {
        var fixture = testing_1.TestBed.createComponent(auction_component_1.AuctionComponent);
        fixture.detectChanges();
        chai_1.expect(fixture.nativeElement.innerHTML.trim()).to.equal("Hello world from the live auction ui module!");
    });
});
//# sourceMappingURL=auction.component.spec.js.map