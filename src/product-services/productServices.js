import { apiProduct } from "./productAuth";
const api = process.env.REACT_APP_API_SERVICE_NAME; 

const user_id = localStorage.getItem("userId");

export const addProductItem = async (product) => {
    const endPoint = api + "api/products/add"; 
   
    const form = new FormData();
    form.append("filter_key", product.product_key);
    form.append("name", product.name);
    form.append("details", product.details);
    form.append("price", product.price);
    form.append("rating", product.rating);
    form.append("isAvailable", product.isAvailable);
    product.images.forEach((item, i) => {
        form.append(`images[${i}]`, item);
    })
   
    return apiProduct(endPoint, form);
};

export const getProduct = async (filter_key) => {
    const endPoint = api + "api/products"; 
   
    const form = new FormData();
    form.append("filter_key", filter_key);
   
    return apiProduct(endPoint, form);
};

export const addRemoveProductCart = async (product_id) => {
    const endPoint = api + "api/products/in_out_cart"; 
   
    const form = new FormData();
    form.append("product_id", product_id);
    form.append("user_id", localStorage.getItem("userId"));
   
    return apiProduct(endPoint, form);
};

export const getCartItems = async () => {
    const endPoint = api + "api/products/getCartItems"; 
   
    const form = new FormData();
    form.append("user_id", localStorage.getItem("userId"));
   
    return apiProduct(endPoint, form);
};

export const buyCancelOrderItem = async (product_id) => {
    const endPoint = api + "api/products/buycancelorder"; 
   
    const form = new FormData();
    form.append("product_id", product_id);
    form.append("user_id", localStorage.getItem("userId"));
   
    return apiProduct(endPoint, form);
};

export const getOrderItems = async () => {
    const endPoint = api + "api/products/getorderitems"; 
   
    const form = new FormData();
    form.append("user_id", localStorage.getItem("userId"));
   
    return apiProduct(endPoint, form);
};

export const productService = {
    addProductItem,
    getProduct,
    addRemoveProductCart,
    getCartItems,
    buyCancelOrderItem,
    getOrderItems
};