import "./home.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => setProduct(response.data));
  }, []);
  return (
    <div className="home">
      <div>
        {product.map((user) => (
          <div key={user.id}>
            <h3>{user.title}</h3>
            <div className="home-1">
              <img src={user.imageUrl} alt="book"></img>
              <p>{user.price} $</p>
              <p>{user.description}</p>

              <button>
                <Link>Add to card</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
