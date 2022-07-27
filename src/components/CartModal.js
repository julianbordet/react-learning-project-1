import React, { useContext, useState, useEffect } from "react"
import './CartModal.css'
import { CartContext } from "./store/cart-context"
import { types } from "./store/cartReducer"


const CartModal = (props) => {

    const [state, dispatch] = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {

        let innerTotalPrice = 0;

        state.itemsOnCart.map((menuitem) => {
            innerTotalPrice += menuitem.price * menuitem.quantity;
        })

        setTotalPrice(innerTotalPrice);
    }, [state.itemsOnCart]);

    const increaseItemQuantityHandler = (menuItem) => {

        /*
        console.log(menuItem);
        */
        let message = {
            type: types.increaseItemQuantity,
            key: menuItem.key,
            name: menuItem.name,
            quantity: menuItem.quantity,
        }

        dispatch(message);
    }

    const decreaseItemQuantityHandler = (menuItem) => {

        let message;

        if(menuItem.quantity > 1){
            message = {
                type: types.decreaseItemQuantity,
                key: menuItem.key,
                name: menuItem.name,
                quantity: menuItem.quantity,
            }
        } else {
            message = {
                type: types.removeItemFromCart,
                key: menuItem.key,
                name: menuItem.name,
                quantity: menuItem.quantity,
            }
        }

       dispatch(message);

    }


    const executeOrder = () => {
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
                            <button onClick={ () => { decreaseItemQuantityHandler(menuItem) }} className='modal-quantity-button minus-button'>-</button>
                            <button onClick={() => { increaseItemQuantityHandler(menuItem) }} className='modal-quantity-button plus-button'>+</button>
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