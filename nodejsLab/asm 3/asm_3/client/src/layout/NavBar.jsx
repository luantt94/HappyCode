import React from "react";
import Container from "react-bootstrap/Container";
import { Badge } from "react-bootstrap";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../redux/usersApiSlice";
import { logout } from "../slices/authSlice";
function NavBar() {
  // const { totalQuantity } = useSelector((state) => state.cart);
  // const userLogin = JSON.parse(localStorage.getItem("isLogin"));
  const { cartItems } = useSelector((state) => state.cart);

  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [logoutApiCall] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());

      // dispatch(resetCart());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" mx-1 ">
        <Container className=" px-5">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Col className=" d-lg-flex gap-4 ps-3">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/shop">
                Shop
              </Nav.Link>
            </Col>
            <Col className=" d-lg-flex justify-content-center">
              <Navbar.Brand className="" as={Link} to="/">
                Boutique
              </Navbar.Brand>
            </Col>
            <Col className=" d-lg-flex gap-4 justify-content-end pe-3">
              <Nav.Link as={Link} to="/cart">
                <div className=" d-flex gap-1 position-relative">
                  <FaShoppingCart className="  pe-1 pt-1 h5" />
                  Cart
                  {cartItems.length > 0 && (
                    <Badge pill bg="success" style={{ marginLeft: "5px" }}>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )}
                </div>
              </Nav.Link>
              <Nav.Link>
                <FaUser className="pe-1 h5 pt-1" />

                {userInfo ? (
                  <>
                    <span className=" pe-2">{userInfo.username}</span>
                    <span
                      className=" text-success fw-bold"
                      onClick={() => handleLogout()}
                    >
                      (Logout)
                    </span>
                  </>
                ) : (
                  <Link
                    className=" text-decoration-none text-black-50"
                    to="/login"
                  >
                    Login
                  </Link>
                )}
              </Nav.Link>
            </Col>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet />
      </section>
    </>
  );
}

export default NavBar;
