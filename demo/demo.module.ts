import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LiveAuctionUiModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, LiveAuctionUiModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}