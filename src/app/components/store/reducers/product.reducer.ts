// import the interface
import { Product } from '../models/product.model';
import { ProductAction, ProductActionType } from '../actions/product.actions';
import { Action, createReducer } from '@ngrx/store';
//create a dummy initial state
const initialState: Array<Product> = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
  },
];


export function productReducer(
  state: Array<Product> = initialState,
  action: Action
) {

  const productAction = action as ProductAction;
  switch (productAction.type) {
    case ProductActionType.ADD_ITEM:
      return [...state, productAction.payload];
    default:
      return state;
  }
}