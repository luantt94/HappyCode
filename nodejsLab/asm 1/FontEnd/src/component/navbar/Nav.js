import { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  console.log(isScrolled);

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="nav_0">
        <div>
          <a href="/">
            <h1 className="nav_1">Movie App</h1>
          </a>
        </div>
        <div>
          <a href="/search">
            <i className="fa fa-search nav_2 "></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
