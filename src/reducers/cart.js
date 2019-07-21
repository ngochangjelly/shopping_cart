import * as types from "../constants/ActionTypes";

let data = JSON.parse(localStorage.getItem("cart"));
let initialState = data ? data : [];
const cart = (state = initialState, action) => {
  const { product, quantity } = action;
  switch (action.type) {
    case types.ADD_TO_CART:
      let index = findProductInCart(product, state);
      index === -1
        ? state.push({ product: product, quantity: quantity })
        : (state[index].quantity += quantity);
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    case types.DELETE_PRODUCT_IN_CART:
      index !== -1 ? state.splice(index, 1) : state;
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};
//find the position of one product in the cart, if it does not exist, return -1
const findProductInCart = (product, cart) => {
  let index = -1;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product.id === product.id) return i;
  }
  return index;
};
export default cart;
