import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'models/products';

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.css']
})
export class AdminEditProductComponent implements OnInit {

  product: Products = new Products();
  id: any;

  constructor(private _httpClient: HttpClient, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._httpClient.get<Products>('http://localhost:8080/admin/product/' + this.id).subscribe(result => {
      this.product = result;
    }, error => {
      console.log(error);
    });
  }

  editProduct(){
    console.log(this.product);
    this._httpClient.put('http://localhost:8080/admin/updateProduct/' + this.id, this.product).subscribe(result => {
      alert("Product updates successfully");
      
    }, error => {
      console.log(error);
    });
    this._router.navigate(['/admin/products']);
  }

}
