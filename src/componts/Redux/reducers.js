import { GET_CARTS_ITEMS, GET_ORDER_ITEMS, GET_PRODUCTS_ITEMS, GLOBLE_SEARCH, SET_GLOBLE_VIEW, SET_PRODUCTS_DETAILS } from "./ActionType";

// Initial State
const initialState = {
    globleSearch: '',
    globleView : 'homeView',
    productsDetails: {},
    productsItem : [],
    cartsData:[],
    orderItems:[]
};

// Reducer function
const ProductReducer = (state = initialState, action) => {
   const {type, payload} = action
   
  switch (type) {
    case GLOBLE_SEARCH:
      return {
        ...state,
        globleSearch: payload
      };

    case SET_GLOBLE_VIEW :
      return {
       ...state,
        globleView: payload
      };
    case SET_PRODUCTS_DETAILS :
      return {
       ...state,
        productsDetails: payload
      };
    case GET_PRODUCTS_ITEMS:
      return {
       ...state,
        productsItem: payload
      };
    case GET_CARTS_ITEMS:
      return {
       ...state,
        cartsData: payload
      };
    case GET_ORDER_ITEMS :
      return {
        ...state,
        orderItems: payload
      }
    default:
      return state;
  }
};

export default ProductReducer;
