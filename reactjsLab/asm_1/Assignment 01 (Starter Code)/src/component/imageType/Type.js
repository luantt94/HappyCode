import React from "react";
import "./Type.css";

const Type = (props) => {
  return (
    <div className="type">
      <img className="image_type" src={props.image} alt="a beauty city" />
      <h4>{props.name}</h4>
      <p>{props.count}</p>
    </div>
  );
};

export default Type;
