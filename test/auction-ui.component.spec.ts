import { inject, ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";
import { AuctionUiComponent } from "../src/auction-ui.component";
import { AuctionUiModule } from "../src";

describe("Auction-Ui-Module component", () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AuctionUiModule.forRoot()
      ]
    });
  });

  it("should say hello world", () => {
    const fixture: ComponentFixture<AuctionUiComponent> = TestBed.createComponent(AuctionUiComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).to.equal("Hello world from the live auction ui module!");
  });

});
