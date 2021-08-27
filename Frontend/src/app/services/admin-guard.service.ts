import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isAdmin()) {
      return true;
    } else {
      this._router.navigate(["/login"]);
    }
    return true;
  }

  isAdmin(): boolean {
    let status = false;
    if (localStorage.getItem("type") == "admin") {
      status = true;
    } else {
      status = false;
    }
    return status;
  }

  logout() {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("type");
    // sessionStorage.setItem('username', null);
    window.location.replace('/login');
  }
}
