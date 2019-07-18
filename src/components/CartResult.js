import React from "react";

const CartResult = props => {
  const { cart } = props;
  const showTotalAmount = cart => {
    let total = 0;
    cart &&
      cart.map(item => {
        total += item.product.price * item.quantity;
      });
    return total;
  };
  return (
    <tr>
      <td colSpan="3" />
      <td>
        <h4>
          <strong>Total</strong>
        </h4>
      </td>
      <td>
        <h4>
          <strong>{showTotalAmount(cart)}$</strong>
        </h4>
      </td>
      <td colSpan="3">
        <button
          type="button"
          className="btn btn-primary waves-effect waves-light"
        >
          Complete purchase
          <i className="fa fa-angle-right right" />
        </button>
      </td>
    </tr>
  );
};
export default CartResult;
