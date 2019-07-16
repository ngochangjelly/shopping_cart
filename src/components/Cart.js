import React from "react";
import { CartItem } from "./CartItem";
import { CartResult } from "./CartResult";
export const Cart = () => {
  return (
    <div>
      <section className="section">
        <div className="table-responsive">
          <table className="table product-table">
            <thead>
              <tr>
                <th />
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <CartItem />
              <CartResult />
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
