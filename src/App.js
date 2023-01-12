import React from "react";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>

    </React.Fragment>
  );
}

export default App;
