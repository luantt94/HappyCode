import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ShopProvider from "./context/app";
import Footer from "./layout/Footer";
import NavBar from "./layout/NavBar";
import CartPage from "./page/Cart";
import CheckoutPage from "./page/Checkout";
import DetailPage from "./page/Detail";
import HomePage from "./page/Home";
import LoginPage from "./page/Login";
import NotFound from "./page/NotFound";
import RegisterPage from "./page/Register";
import ShopPage from "./page/Shop";


function App() {
  return (
    <>
      <NavBar />
      <main>
        <ShopProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="detail/:id" element={<DetailPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ShopProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
