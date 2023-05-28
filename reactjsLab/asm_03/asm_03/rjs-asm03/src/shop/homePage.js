import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./homePage.css";
import axios from "axios";
const HomePage = () => {
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
      <div className="homePage">
        <img src={require(".././img/banner1.jpg")} alt="hình ảnh" />
        <div className="homePage_1">
          <p>NEW INSPIRATION 2020</p>
          <h1>20% OFF ON NEW SEASON</h1>
          <button>
            <Link to="shop">Browse collections</Link>
          </button>
        </div>
      </div>
      <div className="homePage_2">
        <p>CAREFULLY CREATED COLLECTIONS</p>
        <h3>BROWSE OUR CATEGORIES</h3>
        <div>
          <Link to="shop">
            <img
              src={require(".././img/product_1.png")}
              alt="hình ảnh"
              class="hover-effect"
            />
          </Link>
          <Link to="shop">
            <img
              src={require(".././img/product_2.png")}
              alt="hình ảnh"
              class="hover-effect"
            />
          </Link>
        </div>
        <div>
          <Link to="shop">
            <img
              src={require(".././img/product_3.png")}
              alt="hình ảnh"
              class="hover-effect hinh"
            />
          </Link>
          <Link to="shop">
            <img
              src={require(".././img/product_4.png")}
              alt="hình ảnh"
              class="hover-effect hinh"
            />
          </Link>
          <Link to="shop">
            <img
              src={require(".././img/product_5.png")}
              alt="hình ảnh"
              class="hover-effect hinh"
            />
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <p>MADE THE HARD WAY</p>
        <h3>TOP TRENDING PRODUCTS</h3>
        <div className="product">
          {products.map((product) => (
            <div className="product_1" key={product._id}>
              <Link>
                <img
                  src={product.img1}
                  alt={product.name}
                  className="hover-effect"
                />
              </Link>
              <h5>{product.name}</h5>

              <p>{Number(product.price).toLocaleString("vi-VN")} đ</p>
            </div>
          ))}
        </div>
      </div>
      {/* d. Các Thôning Tin Khác */}
      <div className="mt-4 free">
        <div>
          <h3>FREE SHIPPING</h3>
          <p>Free shipping worlwide</p>
        </div>
        <div>
          <h3>24 X 7 SERVICE</h3>
          <p>Free shipping worlwide</p>
        </div>
        <div>
          <h3>FESTIVAL OFFER</h3>
          <p>Free shipping worlwide</p>
        </div>
      </div>

      <div className="d-flex justify-content-between mt-4 mb-4 align-items-center">
        <div>
          <h3>LET'S BE FRIENDS!</h3>
          <p>Nisi nisi tempor consequat laboris nisi.</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your email address"
            className="p-2"
          ></input>
          <button className="p-2">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
