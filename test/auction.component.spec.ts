import {
  inject,
  ComponentFixture,
  TestBed
} from "@angular/core/testing";
import { expect } from "chai";
import { AuctionComponent } from "../src/auction.component";
import { LiveAuctionUiModule } from "../src";

describe("LiveAuction-hello-world component", () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        LiveAuctionUiModule.forRoot()
      ]
    });
  });

  it("should say hello world", () => {
    const fixture: ComponentFixture<AuctionComponent> = TestBed.createComponent(AuctionComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).to.equal("Hello world from the live auction ui module!");
  });

});
