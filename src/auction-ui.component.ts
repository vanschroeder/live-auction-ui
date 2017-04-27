import { Component } from "@angular/core";
import { LoginService } from "./login/login.service"

@Component({
  selector: "auction-ui",
  templateUrl: "src/auction-ui.component.html"
})

export class AuctionUiComponent {
    isAuthenticated: boolean;
    constructor(private loginservice:LoginService) {}
}
