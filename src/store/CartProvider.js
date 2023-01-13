// Component to manage context
// Component to provide access to context to other components

import React, { useReducer } from 'react'
import CartContext from './cart-content'


const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.value);
        const updatedTotalAmount = state.totalAmount + action.value.price*action.value.amount;
        return ({
            items: updatedItems,
            totalAmount: updatedTotalAmount
        })
    }   
    if(action.type === 'REMOVE'){
        
    }
}

const CartProvider = props => {

    const addItemToCartHandler = item => {
        dispatchCart({ type: 'ADD', value: item });
    }
    const removeItemFromCartHandler = id => {
        dispatchCart({ type: 'REMOVE', value: id });
    }

    const initCartState = { items: [], totalAmount: 0 }
    // WE NEED TO USE A STATE OR REDUCER SO THAT EACH TIME WE UPDATE VALUES
    // IT IS UPDATED IN ALL OTHER COMPONENTS AND RE-RENDERED 
    const [cartState, dispatchCart] = useReducer(cartReducer, initCartState);

    // This is the variable where we store everything and that is updated and rerendered
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider