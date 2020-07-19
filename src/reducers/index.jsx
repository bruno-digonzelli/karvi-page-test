import {combineReducers} from 'redux';
import ProductsReducer from './productReducer';

export default combineReducers({
  products: ProductsReducer,
});
