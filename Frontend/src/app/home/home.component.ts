import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from 'models/categories';
import { Products } from 'models/products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

categories: any;

products: any;

productList: any = [];

modal: Products = new Products();

  constructor(private _router: Router, private _httpClient: HttpClient, private _cartService: CartService) { }

  ngOnInit(): void {
    this._httpClient.get('http://localhost:8080/items/categories').subscribe (result => {
      this.categories = result;
    }, error => { console.log(error);
    })

    this._httpClient.get('http://localhost:8080/products').subscribe (result => {
      this.products = result;
      console.log(result);
      this.products.forEach((product: { rating: number; }) => {
        if(product.rating <= 8){
          this.productList.push(product);
        }
      });
    }, error => { console.log(error);
    })
  }

  addToCart(item: Products){
    window.alert('Product added to the cart!');
    this._cartService.add(item);
  }

  updateModal(item: Products){
    this.modal = item;
  }

}
