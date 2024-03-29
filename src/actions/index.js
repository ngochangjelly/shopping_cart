import * as types from "./../constants/ActionTypes";
export const actAddToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity
  };
};
export const actDeleteProduct = product => {
  return {
    type: types.DELETE_PRODUCT_IN_CART,
    product
  };
};
export const actChangeMessage = message => {
  return {
    type: types.CHANGE_MESSAGE,
    message
  };
};
