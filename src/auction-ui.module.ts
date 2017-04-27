import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { VgCoreModule } from "videogular2/core";
import { VgControlsModule } from "videogular2/controls";
import { VgOverlayPlayModule } from "videogular2/overlay-play";
import { VgBufferingModule } from "videogular2/buffering";
import { AuctionUiComponent } from "./auction-ui.component";
import { BiddingComponent } from "./bidding/bidding.component";
import { LoginComponent } from "./login/login.component";
import { LoginService } from "./login/login.service";
import { BiddingService } from "./bidding/bidding.service";

@NgModule({
  declarations: [
      AuctionUiComponent,
      LoginComponent,
      BiddingComponent
  ],
  imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      VgCoreModule,
      VgControlsModule,
      VgOverlayPlayModule,
      VgBufferingModule
  ],
  exports: [
      AuctionUiComponent
  ],
    providers: [
        LoginService,
        BiddingService
    ]
})

export class AuctionUiModule {

  static forRoot(): ModuleWithProviders {
    return {
        ngModule: AuctionUiModule
    };
  }

}
