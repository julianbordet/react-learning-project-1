import React, { useContext } from "react";
import {useState} from "react";
import './MenuItem.css';
import { CartContext } from "./store/cart-context";
import { types } from "./store/cartReducer";

const MenuItem = (props) =>{

const [enteredQuantity, setEnteredQuantity] = useState(0);
const [state, dispatch] = useContext(CartContext)


    const submitHandler = (event) =>{
        event.preventDefault();

        const cartkey = Math.random();

        const menuItemToBeAdded = {
            type: types.addItemToCart,
            key: cartkey,
            name: props.name,
            price: props.price,
            quantity: enteredQuantity
        }
     
        
        console.log('Desde menuItem: menuItemToBeADDED: ');
        console.log(menuItemToBeAdded);
        
       
        dispatch(menuItemToBeAdded);
        

    }

    

    const quantityHandler = (event) =>{
        setEnteredQuantity(event.target.value);
    }

    return(
        <React.Fragment>
            <div className='menu-item-container'>
                <div className='first-column'>
                    <span className='menu-item-name'>{props.name}</span>
                    <span className='menu-item-description'>{props.description}</span>
                    <span className='menu-item-price'>${props.price}</span>
                </div>
                <div className='second-column'>
                    <form className='item-form' onSubmit={submitHandler}>
                        <div className='first-row'>
                            <label htmlFor='amount' id='amount-label'>Amount</label>
                            <input type='number' name='amount' id='amount' onChange={quantityHandler}></input>
                        </div>
                        <div className='second-row'>
                            <input type='submit' value='+ Add'></input>
                        </div>
                    </form>
                </div>
            </div>
            <hr></hr>
        </React.Fragment>
    )

}

export default MenuItem;