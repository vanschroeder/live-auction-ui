import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AuctionUiModule } from "../src";
import { DemoComponent } from "./demo.component";

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, AuctionUiModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}