import React from "react";
import Cart from "./Cart";
import './Header.css'


const Header = () =>{

    return(
        <div className="header">
            <span className='title'>ReactMeals</span>
            <Cart className="cart"></Cart>
        </div>
    )

}

export default Header;