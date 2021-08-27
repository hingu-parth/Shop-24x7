import { HttpClient } from "@angular/common/http";
import { Route } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../models/user";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  id: any;
  user: any;

  constructor(
    private _httpClient: HttpClient,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get("id");
    this._httpClient.get("http://localhost:8080/users").subscribe(
      (result) => {
        this.user = result;
        // if(result.length == 1) {
        //   window.location.replace("/home")
        // } else {
        //   alert("No User was Found")
        // }
      },
      (_error) => {
        alert("Error Getting Users");
      }
    );
  }

  // ondelete(user.id) {
  //   this.id = this._route.snapshot.paramMap.get('id');
  // }
  addUser(){
    window.location.replace("/admin/add-user");
  }


  editUser(id: String){
    window.location.replace("/admin/edit-user/" + id);
  }

  deleteUser(id: String) {
    this._httpClient
      .delete("http://localhost:8080/users/deleteUser/" + id)
      .subscribe(
        (result) => {},
        (error) => {
          console.log(error);
        }
      );
    window.location.reload();
  }
}
