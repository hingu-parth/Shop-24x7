import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from '../models/supplier';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  id: any;
  profile: Supplier = new Supplier();

  constructor(private _httpClient: HttpClient, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._httpClient.get<Supplier>('http://localhost:8080/users/profile/' + this.id).subscribe(result => {
      console.log(result);
      this.profile = result;
  }, error => {
    console.log(error)
    })
  }

  updateProfile() {
    this._httpClient.put('http://localhost:8080/users/editprofile/' + this.id, this.profile).subscribe( result => {
    }, error => {
      console.log(error)
    })
    alert("Profile updated successfully")
    this._router.navigate(['/profile', this.id]);
  }

}
