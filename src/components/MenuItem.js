import React from "react";
import './MenuItem.css';

/*<span>Amount:</span>
<span>+ Add</span>*/

const MenuItem = (props) =>{

    return(
        <React.Fragment>
            <div className='menu-item-container'>
                <div className='first-column'>
                    <span className='menu-item-name'>{props.name}</span>
                    <span className='menu-item-description'>{props.description}</span>
                    <span className='menu-item-price'>${props.price}</span>
                </div>
                <div className='second-column'>
                    <form className='item-form'>
                        <div className='first-row'>
                            <label htmlFor='amount' id='amount-label'>Amount</label>
                            <input type='number' name='amount' id='amount'></input>
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