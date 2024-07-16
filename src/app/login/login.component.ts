import {Component, inject} from '@angular/core';
import {AuthService} from "../service/auth/auth.service";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService : AuthService;
  router = inject(Router);

  loggedIn !: boolean;

  constructor(authService : AuthService) {
    this.authService = authService;
    this.loggedIn = authService.isLoggedIn();
  }


  doLogin() {
    this.authService.login();
    this.router.navigate(["/protected"])
  }

  doLogOut() {
    this.authService.logout();
    this.router.navigate(["/"])
  }

}
