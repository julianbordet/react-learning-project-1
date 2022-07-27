import React, {useState, useContext, useEffect} from "react";
import './CartButton.css'
import { CartContext } from "./store/cart-context";

const CartButton = (props) =>{

    const [state, dispatch] = useContext(CartContext);
    const [amount, setAmount] = useState(0);

    

    useEffect( () => {

        let cartLength = 0;

        cartLength = state.itemsOnCart.length;

        setAmount(cartLength);

    }, [state]);

    return(
        <a onClick={props.openModal} className='cart-container'>
            <i class="fa-solid fa-cart-shopping"></i>
            <span className='cart-text' href=''>Your Cart</span>
            <span className='cart-items-counter'>{amount}</span>
        </a>
    )

}

export default CartButton;