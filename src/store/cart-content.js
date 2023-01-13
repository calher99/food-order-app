import React from "react"
// Store in a variable the context
// The context is given the structure but it is not necesary.
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: item=> {},
    removeItem: id=> {}
})

export default CartContext;