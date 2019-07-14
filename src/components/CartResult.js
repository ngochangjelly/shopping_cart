import React from "react";
export const CartResult = () => {
  return (
    <div>
      <tr>
        <td colSpan="3" />
        <td>
          <h4>
            <strong>Total</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>15$</strong>
          </h4>
        </td>
        <td colSpan="3">
          <button
            type="button"
            class="btn btn-primary waves-effect waves-light"
          >
            Complete purchase
            <i class="fa fa-angle-right right" />
          </button>
        </td>
      </tr>
    </div>
  );
};
