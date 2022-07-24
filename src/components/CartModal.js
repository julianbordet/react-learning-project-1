import React from "react"
import './CartModal.css'

const CartModal = (props) =>{

    return( 
    <div>
        <div className='backdrop' onClick={props.closeModal}></div>
        <div className='modal'>    
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
        </div>
    </div>
    )

}

export default CartModal;