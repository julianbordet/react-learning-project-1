import React from "react";
import './CartButton.css'

const CartButton = (props) =>{

    return(
        <a onClick={props.openModal} className='cart-container'>
            <i class="fa-solid fa-cart-shopping"></i>
            <span className='cart-text' href=''>Your Cart</span>
            <span className='cart-items-counter'>0</span>
        </a>
    )

}

export default CartButton;