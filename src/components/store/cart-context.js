import React, {createContext, useReducer} from "react";
import CartReducer from "./cartReducer";

const initialState = {
    itemsOnCart: []
};

const CartContext = createContext();



const CartContextProvider = ({children}) =>{

    const [state, dispatch] = useReducer(CartReducer, initialState);

    return(
        <CartContext.Provider value={[state, dispatch]}>
            {children}
        </CartContext.Provider>
    )

}

export {CartContext}
export default CartContextProvider