import React from "react";
import {connect} from 'react-redux'
import * as message from '../constants/Message'
const showSubToTal = (price, quantity) => {
  const total=parseInt(price,10) * parseInt(quantity,10)
  return total;
};
const CartItem = props => {
  const item = props.item;
  const { price, name, image} = item.product;
  const { product,quantity } = item;
  const {onChangeMessage, onDeleteProduct}=props
  const handleDeleteProduct=(product)=>{
    onDeleteProduct(product)
    onChangeMessage(message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
  }
  return (
    <tr>
      <th scope="row">
        <img src={image} alt="" className="img-fluid z-depth-0" />
      </th>
      <td>
        <h5>
          <strong>{name}</strong>
        </h5>
      </td>
      <td>{price}$</td>
      <td className="center-on-small-only">
        <span className="qty">{item.quantity} </span>
        <div className="btn-group radio-group" data-toggle="buttons">
          <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
            <a>—</a>
          </label>
          <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
            <a>+</a>
          </label>
        </div>
      </td>
      <td>{showSubToTal(price, quantity)}$</td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-primary waves-effect waves-light"
          data-toggle="tooltip"
          data-placement="top"
          title=""
          data-original-title="Remove item"
          onClick={()=>handleDeleteProduct(product)}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default connect(null, null)(CartItem);
