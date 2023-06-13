import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";
// import NewsletterSignup from "./NewsletterSignup";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/auth"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addProduct"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Add Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/auth"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Admin Products
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* <NewsletterSignup /> */}
    </header>
  );
}

export default MainNavigation;
