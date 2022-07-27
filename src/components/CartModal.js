import React, { useContext, useState, useEffect } from "react"
import './CartModal.css'
import { CartContext } from "./store/cart-context"


const CartModal = (props) => {

    const [state, dispatch] = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect( () =>{

        let innerTotalPrice = 0;

        state.itemsOnCart.map( (menuitem) => {
            innerTotalPrice += menuitem.price * menuitem.quantity;
        })

        setTotalPrice(innerTotalPrice);
    }, [state.itemsOnCart] );

   
    
    
    /*
    const calculateTotalPrice = () =>{

        let innerTotalPrice = 0;

        state.itemsOnCart.map( (menuitem) => {
            innerTotalPrice += menuitem.price * menuitem.quantity;
        })

        setTotalPrice(innerTotalPrice);
    }
    */
    


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
                                <span className='modal-quantity'>x {menuItem.quantity}</span>
                            </div>
                        </div>
                        <div className='modal-column-two'>
                            <button className='modal-quantity-button minus-button'>-</button>
                            <button className='modal-quantity-button plus-button'>+</button>
                        </div>
                    </div>
                ))}

                <div className='amount-row'>
                    <span className='total-amount-label'>Total Amount:</span>
                    <span className='total-amount-price'>${totalPrice}</span>
                </div>

                <div className='close-order-buttons'>
                    <button className='modal-close-button'>Close</button>
                    <button className='modal-order-button' onClick={executeOrder}>Order</button>
                </div>

            </div>
        </div>
    )

}

export default CartModal;