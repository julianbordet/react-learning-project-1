import React from "react";
import './Cart.css'

const Cart = () =>{

    return(
        <div className='cart-container'>
            <i class="fa-solid fa-cart-shopping"></i>
            <a className='cart-text' href=''>Your Cart</a>
            <span className='cart-items-counter'>0</span>
        </div>
    )

}

export default Cart;