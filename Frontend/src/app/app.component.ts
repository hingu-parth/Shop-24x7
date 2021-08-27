import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shop24X7';

  loginStatus: boolean = false;
  type: any = "";

  constructor(private _authGuard: AuthGuard, private _router: Router) {}

  ngOnInit(): void {
    this.type = localStorage.getItem('type');
    this.loginStatus = this._authGuard.isLoggedIn()
  }

  logout() {
    this._authGuard.logout();
    localStorage.removeItem('userName');
    window.location.reload;
  }
}
