import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container d-flex align-items-center justify-content-between p-3">
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="shop">Shop</Link>
      </div>
      <div  className="header">
        <h3>
          <Link>BOUTIQUE</Link>
        </h3>
      </div>
      <div  className="header">
        <Link to="cart">Cart</Link>
        <Link to="login">Login</Link>
      </div>
    </div>
  );
};
export default Header;
