import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../types';

const initialState = {
  products: [],
  filters: [],
  loading: false,
  error: null,
};

export default function( state = initialState, action) {
  switch (action.type) {
  case GET_PRODUCTS:
    return {
      ...state,
      loading: action.payload,
    };
  case GET_PRODUCTS_SUCCESS:
    return {
      ...state,
      products: action.payload.items,
      filters: action.payload.availableFilters,
      loading: initialState.loading,
    };
  case GET_PRODUCTS_ERROR:
    return {
      ...state,
      loading: initialState.loading,
      error: action.payload,
    };
  default:
    return state;
  }
}
