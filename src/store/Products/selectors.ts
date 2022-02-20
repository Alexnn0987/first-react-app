import { RootReducerType } from '../types';

export const getProductData = (state: RootReducerType) =>
  state.product.products;
export const getOneProductData = (state: RootReducerType) =>
  state.product.oneProduct;
