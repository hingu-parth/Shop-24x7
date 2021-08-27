import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { MustMatch } from '../directives/mustMatch.validator';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  userForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
    this.userForm = this._formBuilder.group({
      username: ['', [Validators.required, Validators.email, Validators.pattern]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      user_type: ['normal']
    });
  }

  get f() {
    return this.userForm!.controls;
  }

  onSubmit() {
    if(this.userForm.valid) {
      console.log(this.user);
      this._httpClient.post('http://localhost:8080/users/register', this.userForm.value).subscribe((response) => {
        console.log(response)
        alert("You are successfully Registered")
      })
      window.location.replace("/login");
    }
  }

}
