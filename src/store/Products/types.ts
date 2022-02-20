import { ProductsActionsType } from './actions';

export type ReducerType = {
  products: OneProductType[];
  oneProduct: OneProductType;
};

export type OneProductType = {
  id: number;
  name: string;
  image: string;
  gender: string;
  hairColor: string;
  occupation: string;
  firstEpisode: string;
  voicedBy: string;
  url: string;
};

export type FetchProductsDataActionType = {
  type: ProductsActionsType.fetchProductsData;
  payload: OneProductType[];
};

export type FetchOneProductActionType = {
  type: ProductsActionsType.fetchOneProduct;
  payload: OneProductType;
};

export type ActionsType =
  | FetchProductsDataActionType
  | FetchOneProductActionType;
