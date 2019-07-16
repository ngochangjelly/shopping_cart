import React from 'react';
import { Product } from "./Product";
const Products = (props) => {
  const {products}=props
  return (
    <div>
      <section className="section">
        <h1 className="section-heading">Danh Sách Products</h1>
        <div className="row">
          {products && products.map((product, key)=>{
            return <Product key={key} product={product}/>
          })}
        </div>
      </section>
    </div>
  );
};

export default Products
