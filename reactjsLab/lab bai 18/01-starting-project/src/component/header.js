import { NavLink, Link } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="header_1">
        <h1>
          <Link to="/" className="header_3">
            Great Quotes
          </Link>
        </h1>
        <div className="header_2">
          <h3>
            <NavLink to="/add" className="header_3">
              Add a Quotes
            </NavLink>
          </h3>

          <h3>
            <NavLink to="/all" className="header_3">
              All Quotes
            </NavLink>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
