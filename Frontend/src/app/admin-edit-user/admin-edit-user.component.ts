import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.css']
})
export class AdminEditUserComponent implements OnInit {

  user: any;
  id: any;

  constructor(private _httpClient: HttpClient, private _route: ActivatedRoute, private _router: Router) { }

  
  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._httpClient.get('http://localhost:8080/users/find/' + this.id).subscribe(result => {
      this.user = result;
      console.log(this.user);
    }, error => {
      console.log(error);
    });
  }

  editUser(){
    this._httpClient.put('http://localhost:8080/users/editUser/' + this.id, this.user).subscribe(result => {
    }, error => {
      console.log(error);
    });
    alert("User updates successfully");
    this._router.navigate(['/users']);
  }

}

