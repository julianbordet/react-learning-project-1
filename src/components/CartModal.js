import React, { useContext } from "react"
import './CartModal.css'
import { CartContext } from "./store/cart-context"


/*
<header className='modal-header'>
<h1>wasabiiii</h1>
<h2>{props.title}</h2>
</header>
<div>
<p>{props.message}</p>
</div>
<footer>
<button onClick={props.closeModal}>Okay</button>
</footer>
*/







const CartModal = (props) => {

    const [state, dispatch] = useContext(CartContext);

   

    return (
        <div>
            <div className='backdrop' onClick={props.closeModal}></div>
            <div className='modal'>
                
                {state.itemsOnCart.map((menuItem) => (
                    <div>
                        <h1 className='modal-item'>{menuItem.name + " " + "key:" + menuItem.key} </h1>
                    </div>
                ))}

            </div>
        </div>
    )

}

export default CartModal;