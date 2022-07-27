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

    const executeOrder = () =>{
        console.log('Ordering...');
    }

   

    return (
        <div>
            <div className='backdrop' onClick={props.closeModal}></div>
            <div className='modal'>
                
                {state.itemsOnCart.map((menuItem) => (
                    <div className='modal-item'>
                        <div className='modal-column-one'>
                            <span className='modal-item-name'>{menuItem.name}</span>
                            <div className='modal-item-second-row'>
                                <span className='modal-item-price'>${menuItem.price}</span>
                                <span>x {menuItem.quantity}</span>
                            </div>
                        </div>
                        <div className='modal-column-two'>
                            <button className='modal-quantity-button plus-button'>-</button>
                            <button className='modal-quantity-button plus-button'>+</button>
                        </div>
                    </div>
                ))}

                <div className='amount-row'>
                    <span className='total-amount-label'>Total Amount:</span>
                    <span className='total-amount-price'>$xxx</span>
                </div>

                <div className='close-order-buttons'>
                    <button>Close</button>
                    <button onClick={executeOrder}>Order</button>
                </div>

            </div>
        </div>
    )

}

export default CartModal;