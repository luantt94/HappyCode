import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:5000/products");

    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const valueContext = { products };
  return (
    <>
      <ShopContext.Provider value={valueContext}>
        {children}
      </ShopContext.Provider>
    </>
  );
};
export default ShopProvider;
