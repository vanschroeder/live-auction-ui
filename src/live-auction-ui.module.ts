import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuctionComponent } from "./auction.component";
/// <reference path="dashjs/index.d.ts" />
@NgModule({
  declarations: [
   AuctionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuctionComponent
  ]
})
export class LiveAuctionUiModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LiveAuctionUiModule
    };
  }

}