import { Action } from '@ngrx/store';
import { Product } from '../models/product.model';
export enum ProductActionType {
  ADD_ITEM = '[Product] Add Product',
}
export class AddItemAction implements Action {
  readonly type = ProductActionType.ADD_ITEM;
  //add an optional payload
  constructor(public payload: Product) {}
}



export type ProductAction = AddItemAction;