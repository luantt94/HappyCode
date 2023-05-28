import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios, { all } from "axios";
import "./shopPage.css";
const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";
  console.log(category);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      );
      setProducts(response.data.slice(0, 8)); // Lấy tối đa 8 sản phẩm đầu tiên
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center p-5 shopPage_1">
        <h1>SHOP</h1>
        <p>shop</p>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <h4>CATEGORIES</h4>
        <input type="text" placeholder="Enter Search Here!"></input>
        <p>Defau sorting</p>
      </div>
      <div className="d-flex">
        <div className="">
          <p>APPLE</p>
          <Link to="?category=all">all</Link>
          <ul className="list-unstyled">
            <li className="list-inline-item">
              <strong>IPHONE & MAC</strong>
            </li>
            <li>
              <Link to="?category=iphone">Iphone</Link>
            </li>
            <li>
              <Link to="?category=ipad">Ipad</Link>
            </li>
            <li>
              <Link to="?category=macbook">Macbook</Link>
            </li>
          </ul>
          <ul className="list-unstyled">
            <li className="list-inline-item">
              <strong>WIRELESS</strong>
            </li>
            <li>
              <Link to="?category=airpod">Airpod</Link>
            </li>
            <li>
              <Link to="?category=watch">Watch</Link>
            </li>
          </ul>
          <ul className="list-unstyled ">
            <li className="list-inline-item">
              <strong>OTHER</strong>
            </li>
            <li>
              <Link to="?category=mouse">Mouse</Link>
            </li>
            <li>
              <Link to="?category=keyboand">Keyboand</Link>
            </li>
            <li>
              <Link to="?category=other">Other</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="product">
            {products.map((product) => {
              if (product.category === category || category === "all") {
                return (
                  <div className="product_1" key={product._id.$oid}>
                    <Link to={"../detail/" + product._id.$oid}>
                      <img
                        src={product.img1}
                        alt={product.name}
                        className="hover-effect"
                      />
                    </Link>
                    <h5>{product.name}</h5>

                    <p>{Number(product.price).toLocaleString("vi-VN")} đ</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopPage;
