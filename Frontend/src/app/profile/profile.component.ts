import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Products } from "models/products";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  view: Boolean = true;
  id: any;
  products: any = [];
  total: number = 0;
  totalProducts : number = 0;
  cart: Array<Products> = new Array<Products>();

  profile: any = [];

  constructor(
    private _httpClient: HttpClient,
    private _router: Router,
    private _route: ActivatedRoute,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cart = this._cartService.cart;
    this.id = localStorage.getItem("userName");
    this._httpClient.get("http://localhost:8080/users/profile/" + this.id).subscribe(
      (result) => {
        this.profile = result;
        console.log(this.profile);
      },
      (error) => {
        console.log(error);
      }
    );

    this.products = this.cart;
    console.log(this.profile);
    this.totalProducts = this.products.length;
    for (let i = 0; i < this.products.length; i++) {
      this.total = this.total + this.products[i].price;
    }
  }

  goBack() {
    this._router.navigate(["/home"]);
  }

  editProfile() {
    this._router.navigate(["/edit-profile/" + this.id]);
  }
}
