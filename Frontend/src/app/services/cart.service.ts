import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from 'models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<Products> = new Array<Products>();

  constructor(private _httpClient: HttpClient) { }

  add(item: Products){
    this.cart.push(item);
  }

  remove(item: Products){
    let index = this.cart.indexOf(item);
    this.cart.splice(index, 1);
  }

  checkout(){
    let request = {
      email: localStorage.getItem('userName'),
      cart: this.cart,
      total: this.cart.reduce((total: any, item: {price: any}) => total + parseFloat(item.price), 0)
    }
    this._httpClient.post('http://localhost:8080/checkout/order', request).subscribe(result => {
      
    }, error => {
      console.log(error);
    });
    this.cart = [];
  }

  clear(){
    this.cart = [];
  }
}
