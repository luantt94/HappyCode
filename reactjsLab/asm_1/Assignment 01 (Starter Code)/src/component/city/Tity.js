import React from "react";
import "./City.css";

const Tity = (props) => {
  return (
    <div className="city">
      <img className="image_city" src={props.image} alt="a beauty city" />
      <div className="city_1">
        <h3>{props.name}</h3>
        <h4>{props.subText}</h4>
      </div>
    </div>
  );
};

export default Tity;
