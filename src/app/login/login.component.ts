import {Component, inject} from '@angular/core';
import {AuthService} from "../service/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService : AuthService;
  router = inject(Router);
  constructor(authService : AuthService) {
    this.authService = authService
  }

  doLogin() {
    this.authService.login();
    this.router.navigate(["/protected"])
  }
}
