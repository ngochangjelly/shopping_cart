import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { actDeleteProduct, actChangeMessage } from "../actions/index";

import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import * as message from "../constants/Message";

const showTotalAmount = cart => {
  let result = message.MSG_ADD_TO_CART_SUCCESS;
  if (cart.length > 0) {
    result = <CartResult cart={cart} />;
    return result;
  }
};
const showCartItem = (cart, onDeleteProduct, onChangeMessage) => {
  let result = null;
  if (cart.length > 0) {
    result = cart.map((item, index) => {
      return (
        <CartItem
          onDeleteProduct={onDeleteProduct}
          onChangeMessage={onChangeMessage}
          key={index}
          item={item}
        />
      );
    });
    return result;
  }
};

const CartContainer = props => {
  const { cart } = props;
  const {onDeleteProduct, onChangeMessage}=props
  return (
    cart && (
      <Cart>
        {showCartItem(cart, onDeleteProduct, onChangeMessage)}
        {showTotalAmount(cart)}
      </Cart>
    )
  );
};

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
};
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProduct: product => {
      dispatch(actDeleteProduct(product));
    },
    onChangeMessage: message => {
      dispatch(actChangeMessage(message));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
