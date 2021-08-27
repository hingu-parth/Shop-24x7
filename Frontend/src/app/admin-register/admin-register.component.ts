import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../models/admin';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  admin: Admin = new Admin();

  userForm!: FormGroup;

  type: any = "";

  constructor(private _formBuilder: FormBuilder, private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
    this.type = localStorage.getItem('type');
    this.userForm = this._formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      user_type: ['admin']
    })
  }

  get f() {
    return this.userForm!.controls;
  }

  onSubmit() {
    if(this.userForm.valid) {
      this._httpClient.post('http://localhost:8080/users/register', this.userForm.value).subscribe((response) => {
        console.log(response)
      })
      alert("You are successfully Registered");
      window.location.replace("/login");
    }
  }

}
