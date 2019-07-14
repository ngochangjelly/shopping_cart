import React from "react";
import { Product } from "./Product";
export const Products = () => {
  return (
    <div>
      <section class="section">
        <h1 class="section-heading">Danh Sách Products</h1>
        <div class="row">
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </div>
  );
};
