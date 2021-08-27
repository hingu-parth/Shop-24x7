import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-admin-add-user',
  templateUrl: './admin-add-user.component.html',
  styleUrls: ['./admin-add-user.component.css']
})
export class AdminAddUserComponent implements OnInit {

  user: User = new User();

  constructor(private _httpClient: HttpClient, private _route: ActivatedRoute, private _router: Router) { }

  
  ngOnInit(): void {  }

  editUser(){
    this._httpClient.post('http://localhost:8080/users/addUser', this.user).subscribe(result => {
      alert("User updates successfully");
    }, error => {
      console.log(error);
    });
    this._router.navigate(['/users']);
  }

}
