import React, { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";

import { Routes, Route } from "react-router-dom";

function App() {

  const [wishlist, setWishlist] = useState([]);
  const wishlistCount = wishlist.length;

  const [cart, setCart] = useState([]);

  const cartCount = cart.reduce(
  (total, item) => total + (item.quantity || 0),
  0
);

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };


  const toggleWishlist = (product) => {
  setWishlist((prev) => {
    const exists = prev.find(item => item.id === product.id);

    if (exists) {
      // remove
      return prev.filter(item => item.id !== product.id);
    } else {
      // add
      return [...prev, product];
    }
  });
};

  return (
    <div className="App">
      <Header cartCount={cartCount} wishlistCount={wishlistCount}  />
      <main>
      <Routes>
        <Route path="/" element={
            <>
              <Banner />
              <Home addToCart={addToCart} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={ <ProductDetail addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist}
    />
  } 
/>
<Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
</main>
      <Footer />
    </div>
  );
}

export default App;