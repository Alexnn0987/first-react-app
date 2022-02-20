import { Dispatch } from 'react';
import makeRequest from '../../network';
import {
  FetchOneProductActionType,
  FetchProductsDataActionType,
} from './types';

export enum ProductsActionsType {
  fetchProductsData = 'FETCH_PRODUCT_DATA',
  fetchOneProduct = 'FETCH_ONE_PRODUCT',
}

export const fetchProductsDataAction = () => {
  return async (dispatch: Dispatch<FetchProductsDataActionType>) => {
    const data = await makeRequest({ url: 'characters' });
    dispatch({
      type: ProductsActionsType.fetchProductsData,
      payload: data,
    });
  };
};

export const fetchOneProductAction = (id: string) => {
  return async (dispatch: Dispatch<FetchOneProductActionType>) => {
    const data = await makeRequest({ url: `characters/${id}` });
    dispatch({
      type: ProductsActionsType.fetchOneProduct,
      payload: data,
    });
  };
};
