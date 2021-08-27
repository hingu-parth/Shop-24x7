import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'models/products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  product: Products = new Products();
  recProducts: any;
  recProdList: any = [];
  id: any;
  constructor(private _router: Router, private _httpClient: HttpClient, private _route: ActivatedRoute, private _cartService: CartService) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.paramMap.get('id');
    console.log(this.id);

    this._httpClient.get<Products>('http://localhost:8080/products/' + this.id).subscribe (result => {
      this.product = result;
    }, error => { console.log(error);
    })

    setTimeout( () => {
      this._httpClient.get<Products>('http://localhost:8080/products').subscribe (result => {
        this.recProducts = result;
        console.log(this.recProducts);
  
        this.recProducts.forEach((recprod: { category_name: string; }) => {
          if(recprod.category_name == this.product.category_name){
            this.recProdList.push(recprod);
          }
        });
      }, error => { console.log(error);
      })
    }, 1000);

  }

  addToCart(item: Products){
    window.alert('Product added to the cart!');
    this._cartService.add(item);
  }

  // updateModal(item: Products){
  //   this.modal = item;
  // }

}
