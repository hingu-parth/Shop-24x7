import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private _router: Router, private _httpClient: HttpClient, private _formBuilder: FormBuilder) { }

  user: User = new User();
  userLogin!: FormGroup;
  log: any;
  type: any;

  ngOnInit(): void {
    this.userLogin = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  get f() {
    return this.userLogin.controls;
  }

  login() {
    this._httpClient.post("http://localhost:8080/users/login", this.user ).subscribe(result => {
      if(result != null) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', this.user.username);
        this._httpClient.get("http://localhost:8080/users/"+this.user.username).subscribe(one =>{
          this.type = one;
          console.log(one);
        }, err => {
          console.log(err);
        })
        setTimeout( ()=> {
          localStorage.setItem('type', this.type.user_type);
          sessionStorage.setItem('userName', this.user.username);
          if(this.type.user_type == 'admin'){
            window.location.replace("/admin-register")
          }else {
            window.location.replace("/home")
          }
          
        }, 1000)
      } else {
        alert("No User was Found")
      }
    }, _error => {
      alert("Error Logging In")
    });
}
}
