import React from "react";
import "./City.css";

const Tity = (props) => {
  return (
    <div className="city">
      <img className="image_city" src={props.image} alt="a beauty city" />
      <div>{props.name}</div>
      <div>{props.subText}</div>
    </div>
  );
};

export default Tity;
