import React from "react";

import { Link } from "react-router-dom";

const ProductList = ({ i }) => {
  return (
    <div className="col-md-4 col-lg-4">
      <div className=" w-100 h-auto">
        <Link to={`/detail/${i._id.$oid}`}>
          <img className=" img-fluid" src={i.img1} alt="" />
        </Link>
        <div className=" text-center">
          <p className=" fw-bold">{i.name}</p>
          <span className=" text-muted">
            {i.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            VNĐ
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
