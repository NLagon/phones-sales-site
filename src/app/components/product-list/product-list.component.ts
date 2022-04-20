import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartService } from '../../cart.service';
import { AddItemAction } from '../store/actions/product.actions';

import { Product, products } from '../store/models/product.model';
import { State } from '../store/models/state.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;
  cartArrayProducts: any;
  condition = false;

  constructor(public cart: CartService, private store: Store<State>) { }

  ngOnInit(): void {
  }

  share() {
    window.alert('The product has been shared!');
  }

  notified(message: string) {
    window.alert(message);
  }

  addCart(product: any) {
    console.log(product.name);
    // this.cart.addArticle(product);
    this.store.dispatch(new AddItemAction(product));

  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
