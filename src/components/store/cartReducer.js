
const types = {
    addItemToCart: 'addItemToCart',
    increaseItemQuantity: 'increaseItemQuantity',
    decreaseItemQuantity: 'decreaseItemQuantity',
    removeItemFromCart: 'removeItemFromCart'
}

const CartReducer = (state, action) =>{

    switch(action.type){

        case types.addItemToCart:

            let item = {
                key: action.key,
                name: action.name,
                price: action.price,
                quantity: action.quantity
            }
  
            let updatedItemsOnCart = state.itemsOnCart;
            updatedItemsOnCart.push(item);
            
            return{
                ...state,
               itemsOnCart: updatedItemsOnCart 
            }
            
        /*
        case types.increaseItemQuantity:
        
        case types.decreaseItemQuantity:

        case types.removeItemFromCart:
        */

        default:
            return{
                state
            } 

    }

}

export {types}
export default CartReducer;