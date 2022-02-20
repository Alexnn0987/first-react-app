import { combineReducers } from 'redux';
import ProductReducer from './Products/reducer';

const rootReducer = combineReducers({
  product: ProductReducer,
});

export default rootReducer;
