import { ProductsActionsType } from './actions';
import { ActionsType, OneProductType, ReducerType } from './types';

const initialState: ReducerType = {
  products: [],
  oneProduct: {} as OneProductType,
};

const reducer = (state = initialState, action: ActionsType): ReducerType => {
  switch (action.type) {
    case ProductsActionsType.fetchProductsData:
      return {
        ...state,
        products: action.payload,
      };
    case ProductsActionsType.fetchOneProduct:
      return {
        ...state,
        oneProduct: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
