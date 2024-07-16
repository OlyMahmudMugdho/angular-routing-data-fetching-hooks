import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../../service/auth/auth.service";

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(["/login"])
    return false;
  }
};
