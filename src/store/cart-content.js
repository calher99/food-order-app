
// Store in a variable the context
// The context is given the structure but it is not necesary.
// But context as this needs to be used with useState/useReduce
// Bc it wont be updated otherwise
import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {}
});

export default CartContext;
