import React from "react";
import './MenuItem.css';

const MenuItem = (props) =>{

    return(
        <React.Fragment>
            <div className='menu-item-container'>
                <div className='first-column'>
                    <span>{props.name}</span>
                    <span>{props.description}</span>
                    <span>{props.price}</span>
                </div>
                <div className='second-column'>
                    <span>Amount:</span>
                    <span>+ Add</span>
                </div>
            </div>
            <hr></hr>
       </React.Fragment>
    )

}

export default MenuItem;