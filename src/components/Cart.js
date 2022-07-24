import React from "react";
import './Cart.css'

const Cart = (props) =>{

    return(
        <a onClick={props.openModal} className='cart-container'>
            <i class="fa-solid fa-cart-shopping"></i>
            <span className='cart-text' href=''>Your Cart</span>
            <span className='cart-items-counter'>0</span>
        </a>
    )

}

export default Cart;