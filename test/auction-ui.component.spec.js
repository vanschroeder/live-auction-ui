"use strict";
var testing_1 = require("@angular/core/testing");
var chai_1 = require("chai");
var auction_ui_component_1 = require("../src/auction-ui.component");
var src_1 = require("../src");
describe("Auction-Ui-Module component", function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                src_1.AuctionUiModule.forRoot()
            ]
        });
    });
    it("should say hello world", function () {
        var fixture = testing_1.TestBed.createComponent(auction_ui_component_1.AuctionUiComponent);
        fixture.detectChanges();
        chai_1.expect(fixture.nativeElement.innerHTML.trim()).to.equal("Hello world from the live auction ui module!");
    });
});
//# sourceMappingURL=auction-ui.component.spec.js.map