import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  productList: any;
  check: Boolean = false;

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
    this._httpClient.get("http://localhost:8080/admin/products").subscribe(result => {
      this.productList = result;
    }, error => {
      console.log(error);
    });
  }

  deleteProduct(id: string){
    this._httpClient.delete("http://localhost:8080/admin/deleteProduct/" + id).subscribe(result => {
      this.check = true;
      alert("Product Successfully Deleted");
    }, error => {
      console.log(error);
    });
    
    window.location.reload();
    
  }

}
