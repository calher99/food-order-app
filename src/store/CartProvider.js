// Component to manage context
// Component to provide access to context to other components

import React, { useReducer } from 'react'
import CartContext from './cart-content'


const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.value.price * action.value.amount;

        const existingCartItemIndex = state.items.findIndex((item) => {
            return item.id === action.value.id
        })

        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        if (existingCartItem) {
            let updatedItem;
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.value.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;

        } else {
            updatedItems = state.items.concat(action.value);
        }
        return ({
            items: updatedItems,
            totalAmount: updatedTotalAmount
        })
    }
    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.value
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.value);
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
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