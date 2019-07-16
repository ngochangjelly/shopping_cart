import React from "react";
export const Product = (props) => {
  const {product}=props
  return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img
              src={[product.image]}
              className="img-fluid"
              alt={product.name}
            />
            <a>
              <div className="mask waves-light waves-effect waves-light" />
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a>{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              <li>
                <i className="fa fa-star" />
              </li>
            </ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">{product.price}</span>
              <span className="right">
                <a
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Add to Cart"
                >
                  <i className="fa fa-shopping-cart" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
  );
};
