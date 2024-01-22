import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import './ProductCard.css';

function ProductCard(){
  return (
    <section className="product-card">
   
      <img src="https://http2.mlstatic.com/D_918579-MLM51559384401_092022-I.jpg"
        alt="Product" 
        className="card_image"/>

      <div className="card_infos">
        <h2 className="card_price">R$ 200,20</h2>
        <h2 className="card_title">Manual do mundo</h2>
      </div>

      <button type="button" className="button_add-cart">
        <FaCartPlus/>
      </button>

    </section>
  );
}

export default ProductCard;
