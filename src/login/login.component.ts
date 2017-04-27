import { Component } from "@angular/core";
import { LoginService } from "./login.service";


@Component({
    selector: "login",
    templateUrl: "src/login/login.component.html",
})

export class LoginComponent {
    username : string;

    login = () => {
        this.loginService.joinAuction(this.username);
    }

    constructor(private loginService : LoginService) {}
}