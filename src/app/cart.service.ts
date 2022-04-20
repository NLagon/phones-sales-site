import { Injectable } from '@angular/core';
import { Product } from './components/store/models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: Product[] = [];

  constructor(public http: HttpClient) {}

  addArticle(article: Product) {
    this.products.push(article);
  }

  clearCart() {
    return (this.products = []);
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );

    // return this.shippingPrice;
  }

  // retrieveShippingPrice() {
  //   this.http.get<any>('/shipping.json').subscribe((data) => {
  //     this.shippingPrice = data;
  //     console.log(this.shippingPrice);
  //   });
  //   // return this.shippingPrice;
  // }
}
