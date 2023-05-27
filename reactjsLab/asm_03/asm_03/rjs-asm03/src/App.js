import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./shop/homePage";
import ShopPage from "./shop/shopPage";
import DetailPage from "./shop/detailPage";
import CartPage from "./shop/cartPage";
import CheckoutPage from "./shop/checkoutPage";
import LoginPage from "./shop/loginPage";
import RegisterPage from "./shop/registerPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/detail/:productId " element={<DetailPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
