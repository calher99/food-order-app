import React from "react"
// Store in a variable the context
// The context is given the structure but it is not necesary.
// But context as this needs to be used with useState/useReduce
// Bc it wont be updated otherwise
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: item=> {},
    removeItem: id=> {}
})

export default CartContext;