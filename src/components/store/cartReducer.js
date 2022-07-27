
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

            /*if (item.key already exists in updateItemsOnCart
                    updatedItemsOnCart.quantity + item.quantity
                    else
                    push*/ 

            /*updatedItemsOnCart.map((theItem) =>{
                if(theItem.key === item.key){
                    return true;
                }}*/

                let sameKey = false;
                let index = -1;

                for(let i = 0; i < updatedItemsOnCart.length; i++){
                    if(updatedItemsOnCart[i].key === item.key){
                        sameKey = true;
                        index = i;
                    }
                }

                if(sameKey === true){
                    let number1 = Number(updatedItemsOnCart[index].quantity);
                    let number2 = Number(item.quantity);
                    let sum = number1+number2;
                    updatedItemsOnCart[index].quantity = sum;
                } else {
                    updatedItemsOnCart.push(item);
                }

                sameKey = false;
                index = -1;
    
            return{
                ...state,
               itemsOnCart: updatedItemsOnCart 
            }
            
        
        case types.increaseItemQuantity:

            let updatedItemsOnCart2 = state.itemsOnCart;

            updatedItemsOnCart2.map( (itemOnCart) =>{
                if(itemOnCart.key === action.key){

                    let existingQuantity = Number(itemOnCart.quantity);
                    let updatedQuantity = existingQuantity+1;

                    itemOnCart.quantity = updatedQuantity;
                }
            } )

            return{
                ...state,
                itemsOnCart: updatedItemsOnCart2 
            }

        
        
        case types.decreaseItemQuantity:

        let updatedItemsOnCart3 = state.itemsOnCart;

        updatedItemsOnCart3.map( (itemOnCart) =>{
            if(itemOnCart.key === action.key){
                let existingQuantity = Number(itemOnCart.quantity);
                let updatedQuantity = existingQuantity-1;

                itemOnCart.quantity = updatedQuantity;
            }
        } )

        return{
            ...state,
            itemsOnCart: updatedItemsOnCart3
        }

    
        case types.removeItemFromCart:
         
        let updatedItemsOnCart4 = state.itemsOnCart;

        updatedItemsOnCart4.map( (itemOnCart) =>{
            if(itemOnCart.key === action.key){
                
                let index = updatedItemsOnCart4.indexOf(itemOnCart);
                updatedItemsOnCart4.splice(index, 1);
            }
        } )

        return{
            ...state,
            itemsOnCart: updatedItemsOnCart4
        }


        default:
            return{
                state
            } 

    }

}

export {types}
export default CartReducer;