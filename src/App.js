import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartSelected, setCartSelected] = useState(false);
  const selectCartHandler = () => setCartSelected(true)
  const closeCartHandler = () => setCartSelected(false)
  return (
    <CartProvider>
      {cartSelected && < Cart onCloseCart = {closeCartHandler}/>}
      <Header onSelectCart = {selectCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
