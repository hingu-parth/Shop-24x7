import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'models/products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  products: any;

  constructor(private _router: Router, private _httpClient: HttpClient, private _cartService: CartService) { }


  ngOnInit(): void {
    this._httpClient.get('http://localhost:8080/products').subscribe (result => {
      this.products = result;
    }, error => { console.log(error);
    })
  }

  addToCart(item: Products){
    window.alert('Product added to the cart!');
    this._cartService.add(item);
  }

  // updateModal(item: Products){
  //   this.modal = item;
  // }

}
