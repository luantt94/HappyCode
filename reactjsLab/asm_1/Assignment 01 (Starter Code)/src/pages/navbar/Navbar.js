import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar_1">
        <div>Booking Website</div>
        <div>
          <button className="navbar_a">Register</button>
          <button className="navbar_b">Login</button>
        </div>
      </div>
      <ul className="navbar_2">
        {props.navbarList.map((nav) => (
          <li className={"fa " + nav.icon} key={nav.type}>
            {nav.type}
          </li>
        ))}
      </ul>
      <div className="navbar_3">
        <h2>A lifetime of discounts? it's Genius</h2>
        <h6 className="navbar_5">
          Get rewarded for your trvals-unlock instant saving of 10% or more with
          a free account
        </h6>
        <button className="navbar_4">Sign in / Register</button>
      </div>
      <div className="navbar_6">
        <input type="text" placeholder="Your Email..." />
        <button className="navbar_7">Search</button>
      </div>
    </div>
  );
};

export default Navbar;
