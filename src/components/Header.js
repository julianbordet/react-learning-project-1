import React from "react";
import CartButton from "./CartButton";
import './Header.css'


const Header = (props) =>{

    return(
        <div className="header">
            <span className='title'>ReactMeals</span>
            <CartButton openModal={props.openModal} className="cart"></CartButton>
        </div>
    )

}

export default Header;