import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { addToCart } from "../redux/cartSlice";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
const Detail = (item) => {
  const { id: productId } = useParams();
  // const { id } = useParams();
  const {
    data: productCurrent,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  const [currentImage, setCurrentImage] = useState();
  const userLogin = JSON.parse(localStorage.getItem("isLogin"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);
  const handleQuantityHighter = () => {
    setQty(qty + 1);
  };
  const handleQuantityLower = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  // const addToCartHandle = () => {
  //   if (userLogin) {
  //     const newItem = { ...productCurrent, qty };
  //     console.log({ newItem });
  //     let totalPrice = qty * productCurrent.price;

  //     const tempProduct = {
  //       ...productCurrent,
  //       quantity: qty,
  //       totalPrice,
  //     };
  //     dispatch(addToCart(tempProduct));
  //     navigate("/cart");
  //   } else {
  //     toast.error("Please login");
  //     navigate("/login");
  //   }
  // };
  const addToCartHandle = () => {
    dispatch(addToCart({ ...productCurrent, qty }));
    navigate("/cart");
  };
  return (
    <>
      {isLoading ? (
        <h2>Loading ...</h2>
      ) : error ? (
        <div>(error?.data?.message || error.error)</div>
      ) : (
        <div className=" container">
          <div className=" m-5">
            <div className="row">
              <div className=" ps-5 col-lg-2 d-flex flex-column gap-2">
                <div className="  w-100">
                  <img
                    className=" w-50"
                    src={productCurrent.img1}
                    onClick={() => setCurrentImage(productCurrent.img1)}
                    alt=""
                  />
                </div>
                <div className="  w-100 ">
                  <img
                    className=" w-50"
                    src={productCurrent.img2}
                    onClick={() => setCurrentImage(productCurrent.img2)}
                    alt=""
                  />
                </div>
                <div className="  w-100">
                  <img
                    className=" w-50"
                    src={productCurrent.img3}
                    onClick={() => setCurrentImage(productCurrent.img3)}
                    alt=""
                  />
                </div>
                <div className="  w-100">
                  <img
                    className=" w-50"
                    src={productCurrent.img4}
                    onClick={() => setCurrentImage(productCurrent.img4)}
                    alt=""
                  />
                </div>
              </div>
              <div className=" col-lg-4 ">
                <img src={productCurrent.img1} alt="" />
              </div>
              <div className=" col-lg-6 d-flex flex-column gap-2 pe-5">
                <h1>{productCurrent.name}</h1>
                <p>{productCurrent.price} VNĐ</p>
                <span>{productCurrent.short_desc}</span>
                <p className=" fw-bold fst-italic">
                  CATEGORY:{" "}
                  <span className=" text-muted fw-normal ">
                    {productCurrent.category}
                  </span>
                </p>
                <div className="quantity d-flex">
                  <div
                    className="quantity__input position-relative w-50 "
                    style={{ height: "40px" }}
                  >
                    <input
                      className=" w-100 h-100 ps-2 "
                      type=""
                      name=""
                      id=""
                      placeholder="QUANTITY"
                      disabled
                    />

                    <div className=" position-absolute top-50 translate-middle-y end-0 pe-2 d-flex gap-2">
                      <span onClick={handleQuantityLower}>
                        <FaChevronCircleLeft />
                      </span>
                      <span>{qty}</span>
                      <span onClick={handleQuantityHighter}>
                        <FaChevronCircleRight />
                      </span>
                    </div>
                  </div>
                  <button
                    className=" bg-black px-2 h-100 text-white "
                    onClick={() => addToCartHandle()}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className=" m-5">
              <button className=" bg-black p-2 my-3 text-white">
                DESCRIPTION
              </button>
              <h5 className=" fst-italic">PRODUCT DESCRIPTION</h5>
              <span className=" my-5 space">{productCurrent.long_desc}</span>
              <br />
              <h5 className=" fst-italic my-5 ">RELATED PRODUCTS</h5>

              {/* <div className="row">
                {productCurrent &&
                  productCurrent.map((i) => (
                    <ProductList i={i} key={i._id.$oid} />
                  ))}
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
