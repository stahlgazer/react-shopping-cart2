import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);
  const addItem = item => {
    setCart([...cart, item]);
  };
  return (
    <div className="App">
      <ProductContext.Provider value={{ addItem, products }}>
        <CartContext.Provider value={cart}>
          <Navigation cart={cart} />
          <Route exact path="/" component={Products} />
          <Route
            path="/cart"
            render={() => <ShoppingCart component={cart} />}
          />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}
export default App;
