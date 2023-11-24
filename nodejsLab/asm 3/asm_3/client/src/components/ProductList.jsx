import React from "react";

import { Link } from "react-router-dom";
import convertMoney from "../convertMoney";
const ProductList = ({ i }) => {
  return (
    <div className="col-md-4 col-lg-4">
      <div className=" w-100 h-auto">
        <Link to={`/detail/${i._id}`}>
          <img className=" img-fluid" src={i.img1} alt="" />
        </Link>
        <div className=" text-center">
          <p className=" fw-bold">{i.name}</p>
          <span className=" text-muted">
            {convertMoney(i.price)}
            VNĐ
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
