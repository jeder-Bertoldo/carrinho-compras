import React, { useContext } from 'react';
import './CartButton.css';
import { IoCartOutline } from 'react-icons/io5';
import AppContext from '../../context/AppContext';

function CartButton() {

  const {cartItems, isCartVisible, setIsCartVisible} = useContext(AppContext); 

  return ( 
    <button type="button" className="cart_button"
      onClick={ () => setIsCartVisible(!isCartVisible)}
    >
      <IoCartOutline/>
      {cartItems.length > 0 && <span className="cart_status">{cartItems.length}</span>}
    </button>
  );
}

export default CartButton;
