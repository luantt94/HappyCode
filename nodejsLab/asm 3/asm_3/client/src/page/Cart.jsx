import React, { useEffect, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { AiFillGift } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateItem } from "../redux/cartSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      cart.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
  }, [cart]);

  const updateQuantity = (item, opt) => {
    // console.log(opt);
    if (opt === "+") {
      dispatch(
        updateItem({
          ...item,
          quantity: item.quantity + 1,
          totalPrice: item.price * (item.quantity + 1),
        })
      );
    }
    if (opt === "-") {
      dispatch(
        updateItem({
          ...item,
          quantity: item.quantity - 1 === 0 ? 1 : item.quantity - 1,
          totalPrice: item.price * (item.quantity - 1),
        })
      );
    }
  };

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
    console.log("remove", cartItem);
  };
  return (
    <div className="container">
      <div className=" m-5 py-5 bg-light">
        <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
          <div className="col-lg-6">
            <h1 className="h2 text-uppercase mb-0">Cart</h1>
          </div>
          <div className="col-lg-6 text-lg-right">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                <li className="breadcrumb-item active" aria-current="page">
                  Cart
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className=" px-5">
        <h3>SHOPPING CART</h3>
        <div className="row">
          <div className=" col-8">
            {cart.length === 0 ? (
              <h4 className=" fw-bold text-danger text-center ">Cart Empty</h4>
            ) : (
              <table className=" table  ">
                <thead>
                  <tr className=" bg-light ">
                    <th className=" text-center" scope="col">
                      IMAGE
                    </th>
                    <th className=" text-center" scope="col">
                      PRODUCT
                    </th>
                    <th className=" text-center" scope="col">
                      PRICE
                    </th>
                    <th className=" text-center" scope="col">
                      QUANTITY
                    </th>
                    <th className=" text-center" scope="col">
                      TOTAL
                    </th>
                    <th className=" text-center" scope="col">
                      REMOVE
                    </th>
                  </tr>
                </thead>
                {cart.map((cartItem) => {
                  return (
                    <tbody key={cartItem._id}>
                      <tr className=" text-center">
                        <td scope="row">
                          <img className=" w-100" src={cartItem.img1} alt="v" />
                        </td>
                        <td className="  w-100 align-middle ">
                          {cartItem.name}
                        </td>
                        <td className=" align-middle ">
                          {cartItem.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                          VND
                        </td>
                        <td className=" align-middle ">
                          <span onClick={() => updateQuantity(cartItem, "-")}>
                            <FaChevronCircleLeft />
                          </span>
                          <span className=" px-1">{cartItem.quantity}</span>
                          <span onClick={() => updateQuantity(cartItem, "+")}>
                            <FaChevronCircleRight />
                          </span>
                        </td>
                        <td className=" align-middle">
                          {cartItem.totalPrice.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                          })}{" "}
                        </td>
                        <td
                          className=" align-middle"
                          onClick={() => handleRemoveFromCart(cartItem)}
                        >
                          <RiDeleteBin6Line />
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            )}

            <div className=" d-flex justify-content-between bg-light p-3 ">
              <div>
                <Link
                  className=" text-decoration-none text-black-50"
                  to="/shop"
                >
                  <GrLinkPrevious />
                  <span className=" ps-2">Continue shopping</span>
                </Link>
              </div>
              <div>
                <Link
                  className=" text-decoration-none text-black-50"
                  to="/checkout"
                >
                  <span className=" border border-dark p-2">
                    Proceed to checkout
                    <GrLinkNext />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-4 p-5 bg-light" style={{ maxHeight: 350 }}>
            <h3> CART TOTAL</h3>
            <div className=" d-flex justify-content-between pt-3 ">
              <p>SUBTOTAL</p>
              <span>
                {total.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}{" "}
              </span>
            </div>
            <hr />
            <div className=" d-flex justify-content-between ">
              <p>TOTAL</p>
              <span>
                {total.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}{" "}
              </span>
            </div>
            <input
              className=" p-2"
              type="text"
              placeholder="Enter your coupon"
            />
            <button className="p-2 w-100 bg-black text-white">
              <AiFillGift /> Apply Coupon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Row,
//   Col,
//   ListGroup,
//   Image,
//   Form,
//   Button,
//   Card,
// } from "react-bootstrap";
// import { FaTrash } from "react-icons/fa";
// import Message from "../components/Message";
// import { addToCart, removeFromCart } from "../slices/cartSlice";

// const Cart = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const cart = useSelector((state) => state.cart);
//   const { cartItems } = cart;

//   // NOTE: no need for an async function here as we are not awaiting the
//   // resolution of a Promise
//   const addToCartHandler = (product, qty) => {
//     dispatch(addToCart({ ...product, qty }));
//   };

//   const removeFromCartHandler = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   const checkoutHandler = () => {
//     navigate("/login?redirect=/shipping");
//   };

//   return (
//     <Row>
//       <Col md={8}>
//         <h1 style={{ marginBottom: "20px" }}>Shopping Cart</h1>
//         {cartItems.length === 0 ? (
//           <Message>
//             Your cart is empty <Link to="/">Go Back</Link>
//           </Message>
//         ) : (
//           <ListGroup variant="flush">
//             {cartItems.map((item) => (
//               <ListGroup.Item key={item._id}>
//                 <Row>
//                   <Col md={2}>
//                     <Image src={item.image1} alt={item.name} fluid rounded />
//                   </Col>
//                   <Col md={3}>
//                     <Link to={`/product/${item._id}`}>{item.name}</Link>
//                   </Col>
//                   <Col md={2}>${item.price}</Col>
//                   <Col md={2}>
//                     <Form.Control
//                       as="select"
//                       value={item.qty}
//                       onChange={(e) =>
//                         addToCartHandler(item, Number(e.target.value))
//                       }
//                     >
//                       {[...Array(item.countInStock).keys()].map((x) => (
//                         <option key={x + 1} value={x + 1}>
//                           {x + 1}
//                         </option>
//                       ))}
//                     </Form.Control>
//                   </Col>
//                   <Col md={2}>
//                     <Button
//                       type="button"
//                       variant="light"
//                       onClick={() => removeFromCartHandler(item._id)}
//                     >
//                       <FaTrash />
//                     </Button>
//                   </Col>
//                 </Row>
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//         )}
//       </Col>
//       <Col md={4}>
//         <Card>
//           <ListGroup variant="flush">
//             <ListGroup.Item>
//               <h2>
//                 Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
//                 items
//               </h2>
//               $
//               {cartItems
//                 .reduce((acc, item) => acc + item.qty * item.price, 0)
//                 .toFixed(2)}
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <Button
//                 type="button"
//                 className="btn-block"
//                 disabled={cartItems.length === 0}
//                 onClick={checkoutHandler}
//               >
//                 Proceed To Checkout
//               </Button>
//             </ListGroup.Item>
//           </ListGroup>
//         </Card>
//       </Col>
//     </Row>
//   );
// };

// export default Cart;
