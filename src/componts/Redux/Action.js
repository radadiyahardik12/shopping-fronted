import { productService } from "../../product-services/productServices";
import { GET_CARTS_ITEMS, GET_ORDER_ITEMS, GET_PRODUCTS_ITEMS, GLOBLE_SEARCH, SET_GLOBLE_VIEW, SET_PRODUCTS_DETAILS } from "./ActionType";

export const globleSearchString = (data) => {
    return {
      type: GLOBLE_SEARCH,
      payload: data,
    };
  };

export const setGlobleView = (view) => {
  return {
    type: SET_GLOBLE_VIEW,
    payload: view,
  };
}

export const setProductsDetails = (data) => {
  return {
    type: SET_PRODUCTS_DETAILS,
    payload: data,
  };
}

export const getProducts = (data) => (dispatch) =>  {
 return  productService.getProduct(data).then((res) => {
    if (res.status && res.data) {
     dispatch({
        type: GET_PRODUCTS_ITEMS,
        payload: res.data
      })
    }
    return res
  })
}

export const setCartHandler = (data, isDetail = true) => (dispatch) =>  {
  productService.addRemoveProductCart(data).then((res) => {
    if (res.status && res.data) {
      if (isDetail) {
        dispatch({
           type: SET_PRODUCTS_DETAILS,
           payload: res.data
         })
      }
    }
  })
}

export const getCartData = () => (dispatch) =>  {
  productService.getCartItems().then((res) => {
    if (res.status && res.data) {
     dispatch({
        type: GET_CARTS_ITEMS,
        payload: res.data
      })
    }
  })
}

export const buyCancelHandler = (data, isDetail = true) => (dispatch) =>  {
  productService.buyCancelOrderItem(data).then((res) => {
    if (res.status && res.data) {
      if (isDetail) {
        dispatch({
           type: SET_PRODUCTS_DETAILS,
           payload: res.data
         })
      }
    }
  })
}

export const getOrderData = () => (dispatch) =>  {
  productService.getOrderItems().then((res) => {
    if (res.status && res.data) {
     dispatch({
        type: GET_ORDER_ITEMS,
        payload: res.data
      })
    }
  })
}