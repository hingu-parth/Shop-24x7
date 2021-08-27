import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable() 
    export class AuthGuard implements CanActivate {
        
        constructor(private _router: Router) { }
            
        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.isLoggedIn()) {
                return true;
            } else {
                this._router.navigate(['/login'])
            } 
            return true;
    }

    isLoggedIn(): boolean {
        let status = false;
        if (localStorage.getItem('isLoggedIn') == 'true') {
            status = true;
        } else {
            status = false
        }
         return status;
    }

    logout() {
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('type');
        // sessionStorage.setItem('username', null);
        window.location.reload();
    }
 }
