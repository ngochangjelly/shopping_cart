let initialState = [
  {
    id: 1,
    name: "macbook",
    image:
      "https://phucanhcdn.com/media/product/33047-laptop-apple-macbook-pro-mr962.jpg",
    description: "apple",
    price: 500,
    inventory: 10,
    rating:3
  },
  {
    id: 2,
    name: "samsung",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81s7gC1PQ7L._SL1500_.jpg",
    description: "samsung",
    price: 400,
    inventory: 10,
    rating:3
  },
  {
    id: 3,
    name: "asus",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61NvqbyD2GL._SL1000_.jpg",
    description: "china",
    price: 300,
    inventory: 10,
    rating:3
  }
];
const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default products;
