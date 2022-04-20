import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  shippingPrices: any = [];

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.shippingPrices = this.cart.getShippingPrices();
    //.subscribe((data) => {
    //    = data;
    //   console.log(this.shippingPrices);
    // });
  }
}
