import { Component, Input } from "@angular/core";
import {LoginService} from "./login.service";


@Component({
    selector: "login",
    templateUrl: "src/login/login.component.html",
    providers: [LoginService]
})

export class LoginComponent {
    username: string;

    login() {
        this.loginService.joinAuction(this.username)
    }
    constructor(private loginService:LoginService) {}
}