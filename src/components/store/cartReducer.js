
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

            console.log('En cartReducer, item es:')
            console.log(item);

            console.log('State es:')
            console.log(state);

            console.log('Action es')
            console.log(action)

            /*
            let updatedItemsOnCart = state.itemsOnCart;
            updatedItemsOnCart.push(item);
            */

            

            return{
                ...state,
             
            }
            
        /*
        case types.increaseItemQuantity:
        
        case types.decreaseItemQuantity:

        case types.removeItemFromCart:
        */

        
    }

}

export {types}
export default CartReducer;