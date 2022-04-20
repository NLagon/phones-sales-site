import { Product } from './product.model';

export interface State {
  readonly products: Array<Product>;
}