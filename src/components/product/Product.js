import React from 'react';
import "./product.scss";
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions';

const Product = (props) => {
  return (
    <div  className="product">
      <div className='product-image'>
        <img src={props.product.image} />
      </div>
      <h3 className="product-title">{props.product.title}</h3>
      <div className="colored-dots">
        <div className="orange dot"></div>
        <div className="pink dot"></div>
        <div className="blue dot"></div>
      </div>
      <div className="text-center">
        <button className="add-button" onClick={() => props.addToCart(props.state.cart, props.product)}>adicionar ao carrinho</button>
      </div>
    </div>
  )
}

const stateProps = (state) => {
  return {
    state: state,
  };
};

export default connect(stateProps, {addToCart: addToCart})(Product)
