import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../store/models/product.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../store/models/state.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  //products: Product[] = [];
  products$: Observable<Array<Product>> | undefined;

  // products = this.cart.products;
  shippingPrice!: number;

  checkoutForm = this.form.group({
    name: ['', Validators.required],
    address: '',
    phoneNumber: '',
  });

  constructor(
    private cart: CartService,
    private form: FormBuilder,
    private router: Router,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.products$ = this.store.select((store) => store.products);

    // console.log(this.products);
    // this.data =
    // console.log(this.data);
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      this.checkoutForm.reset();
      // this.products = this.cart.clearCart();
      this.router.navigate(['/']);
    }
  }

  get name() {
    return this.checkoutForm.get('name');
  }
}
