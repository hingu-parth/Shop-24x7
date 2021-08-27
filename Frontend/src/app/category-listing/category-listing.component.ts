import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from 'models/categories';
import { Products } from 'models/products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.css']
})
export class CategoryListingComponent implements OnInit {

  products: any;
  categories: any;
  id: any;
  category : any = [];

  constructor(private _router: Router, private _httpClient: HttpClient, private _route: ActivatedRoute, private _cartService: CartService) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    console.log(this.id);

    this._httpClient.get<Categories>('http://localhost:8080/items/category/'+this.id).subscribe (result => {
      this.categories = result;
    }, error => { console.log(error);
    })
    

    setTimeout( ()=> {
      this._httpClient.get<Products>('http://localhost:8080/products').subscribe (result => {
        this.products = result;
        this.products.forEach((product: { category_name: any; }) => {
          if(product.category_name == this.categories.name){
            this.category.push(product);
          }
        });
      }, error => { console.log(error);
      });
    }, 500)
  }

  addToCart(item: Products){
    window.alert('Product added to the cart!');
    this._cartService.add(item);
  }

  // updateModal(item: Products){
  //   this.modal = item;
  // }

  // Search(){
  //   this.category = this.category.filter(res => {
  //     return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
  //   })
  // }

}