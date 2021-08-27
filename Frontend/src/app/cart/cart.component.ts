import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'models/products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Array<Products> = new Array<Products>();

  constructor(private _cartService: CartService, private _router: Router) { }

  ngOnInit(): void {
    this.cart = this._cartService.cart;
  }

  total(){
    return(this.cart.reduce((total: any, item: {price: any}) => total + parseFloat(item.price), 0));
  }

  checkout(){
    this._cartService.checkout();
    alert("Your order has been placed");
    this._router.navigate(['/home']);
  }

  remove(item: Products){
    this._cartService.remove(item);
  }

  clearCart(){
    this._cartService.clear();
    window.location.reload();
    alert("Your cart has been emptied");
  }

}
