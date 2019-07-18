import React from "react";
const Cart = (props) => {
  const {children}=props
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
              {children}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
export default Cart