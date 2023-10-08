import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cartSlice";
import { useEffect } from "react";

function NavBar() {
  const dispatch = useDispatch();
  // const { totalQuantity } = useSelector((state) => state.cart);
  const userLogin = JSON.parse(localStorage.getItem("isLogin"));
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartTotal);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/");
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
                  {/* <div className="amount-container">
                    <p className="total-amount">{totalQuantity}</p>
                  </div> */}
                  <p>Cart</p>
                </div>
              </Nav.Link>
              <Nav.Link>
                <FaUser className="pe-1 h5 pt-1" />

                {userLogin ? (
                  <>
                    <span className=" pe-2">{userLogin.fullName}</span>
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
