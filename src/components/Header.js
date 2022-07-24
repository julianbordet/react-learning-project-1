import React from "react";
import Cart from "./Cart";
import './Header.css'


const Header = (props) =>{

    return(
        <div className="header">
            <span className='title'>ReactMeals</span>
            <Cart openModal={props.openModal} className="cart"></Cart>
        </div>
    )

}

export default Header;