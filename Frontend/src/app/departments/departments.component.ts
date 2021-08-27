import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  categories: any;

  constructor(private _router: Router, private _httpClient: HttpClient) { }

  ngOnInit(): void {
      this._httpClient.get('http://localhost:8080/items/categories').subscribe (result => {
        this.categories = result;
      }, error => { console.log(error);
      })
  }

}
