import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import Products from "./../components/Products";

const ProductsContainer = (props) => {
  const products=props.products
  return (
    <Products products={products}/>
  );
};
ProductsContainer.propTypes={
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name:  PropTypes.string.isRequired,
            image:  PropTypes.string.isRequired,
            description:  PropTypes.string.isRequired,
            price:  PropTypes.number.isRequired,
            inventory:  PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired
}
const mapStateToProps=state=>{
  return{
    products:state.products
  }
}
export default connect(mapStateToProps,null)(ProductsContainer)
