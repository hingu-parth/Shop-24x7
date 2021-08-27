import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../models/admin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  constructor( private _router: Router, private _httpClient: HttpClient, private _formBuilder: FormBuilder) { }

  admin: Admin = new Admin();
  adminLogin!: FormGroup;
  
  ngOnInit(): void {
    this.adminLogin = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  get f() {
    return this.adminLogin.controls;
  }

  login() {
    this._httpClient.post("http://localhost:8080/users/login", this.admin ).subscribe(result => {
      console.log(result);
      if(result == 0) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', this.admin.username);
        sessionStorage.setItem('userName', this.admin.username);
        window.location.replace("/home")
      } else {
        alert("No User was Found")
      }
    }, _error => {
      alert("Error Logging In")
    });
}
}