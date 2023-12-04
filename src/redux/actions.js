import products from "../assets/fake-data/products";

// actions.js
export const addToCart = (product) => {
    product.quantity = 1;
    return {
      type: 'ADD_TO_CART',
      payload: product,
    };
  };
  
  export const removeFromCart = (productId) => {
    return {

      type: 'REMOVE_FROM_CART',
      payload: productId,
    };
  };

  export const increaseFromCart = (productId) => {
    return {

      type: 'INCREASE_FROM_CART',
      payload: productId,
    };
  };

  export const decreaseFromCart = (productId) => {
    return {
      type: 'DECREASE_FROM_CART',
      payload: productId
    }
  };
  
  export const filterProductByCategory = (category) => {
    return {
      type: 'FILTER_PRODUCT_BY_CATEGORY',
      payload: category
    }
  }
  