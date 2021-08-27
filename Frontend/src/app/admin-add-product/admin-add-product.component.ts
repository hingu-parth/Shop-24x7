import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'models/products';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {

  product: Products = new Products();

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
  }

  addProduct(){
    this._httpClient.post('http://localhost:8080/admin/addProduct', this.product).subscribe(result => {
      alert("Product Added Successfully");
      
    }, error => {
      console.log(error);
    });
    this._router.navigate(['/admin/products']);
  }


}
