import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'models/orderModel';

@Component({
  selector: 'app-admin-edit-order',
  templateUrl: './admin-edit-order.component.html',
  styleUrls: ['./admin-edit-order.component.css']
})
export class AdminEditOrderComponent implements OnInit {

  order: Order = new Order();
  id: any;

  constructor(private _httpClient: HttpClient, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._httpClient.get<Order>('http://localhost:8080/admin/order/' + this.id).subscribe(result => {
      this.order = result;
    }, error => {
      console.log(error);
    });
  }

  editOrder(){
    this._httpClient.put('http://localhost:8080/admin/updateOrder/' + this.id, this.order).subscribe(result => {

    }, error => {
      console.log(error);
    });
    this._router.navigate(['/orders']);
  }

}
