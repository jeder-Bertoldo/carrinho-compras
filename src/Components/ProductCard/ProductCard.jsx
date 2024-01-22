import React from 'react';
import propTypes from 'prop-types';
import { FaCartPlus } from 'react-icons/fa';
import './ProductCard.css';
import formatCurrancy from '../../utils/formatCurrency';


function ProductCard({data}){

  const  { title, thumbnail, price} = data;

  return (
    <section className="product-card">
   
      <img src={thumbnail}
        alt="Product" 
        className="card_image"/>

      <div className="card_infos">
        <h2 className="card_price">{formatCurrancy(price, 'BRL')}</h2>
        <h2 className="card_title">{title}</h2>
      </div>

      <button type="button" className="button_add-cart">
        <FaCartPlus/>
      </button>

    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
