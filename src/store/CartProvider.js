// Component to manage context
// Component to provide access to context to other components

import React, { useReducer } from 'react'
import CartContext from './cart-content'


const cartReducer = (state, action) => {

}

const CartProvider = props => {

    const addItemToCartHandler = item => {}
    const removeItemFromCartHandler = id => {}

    const initCartState = {items: [] , totalAmount: 0}
    // WE NEED TO USE A STATE OR REDUCER SO THAT EACH TIME WE UPDATE VALUES
    // IT IS UPDATED IN ALL OTHER COMPONENTS AND RE-RENDERED 
    const [cartState, dispatchCart] = useReducer(cartReducer, initCartState);

    const cartContext = {
        items: [],
        totalAmount: 0,
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