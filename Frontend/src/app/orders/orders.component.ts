import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  products: any = []
  id: any;
  status: any;
  total: number = 0;
  orders: any;

  constructor(private _httpClient: HttpClient, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
      this._httpClient.get("http://localhost:8080/admin/orders").subscribe(result => {
        this.orders = result;
      }, _error => {
        alert("There is no order available")
      });
  }
  
  deleteOrder(_id: String) {
    this._httpClient.delete("http://localhost:8080/admin/deleteOrder/" + _id).subscribe(result => {
      alert("Order deleted successfully!")
      console.log(result)
    }, (error) => {
      console.log(error)
    })
    window.location.reload();
  }

  onBack() {
    this._router.navigate(['/home', this.id])
  }
}
