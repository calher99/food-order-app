import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {

  const [cartSelected, setCartSelected] = useState(false);
  const selectCartHandler = () => setCartSelected(true)
  const closeCartHandler = () => setCartSelected(false)
  return (
    <React.Fragment>
      {cartSelected && < Cart onCloseCart = {closeCartHandler}/>}
      <Header onSelectCart = {selectCartHandler}/>
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
