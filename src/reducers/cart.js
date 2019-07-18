import * as types from "../constants/ActionTypes";

// let data=JSON.parse(localStorage.getItem('cart'))
let initialState = [
  {
    product: {
      id: 1,
      name: "macbook",
      image:
        "https://phucanhcdn.com/media/product/33047-laptop-apple-macbook-pro-mr962.jpg",
      description: "apple",
      price: 500,
      inventory: 10,
      rating: 3
    },
    quantity: 5
  },
  {
    product: {
      id: 1,
      name: "macbook",
      image:
        "https://phucanhcdn.com/media/product/33047-laptop-apple-macbook-pro-mr962.jpg",
      description: "apple",
      price: 500,
      inventory: 10,
      rating: 3
    },
    quantity: 5
  }
];
const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return [...state];
    default:
      return [...state];
  }
};
export default cart;
