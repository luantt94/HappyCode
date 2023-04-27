import React from "react";
import "./Hotels.css";

const Hotels = (props) => {
  return (
    <div className="hotels">
      <img className="image_Hotels" src={props.image_url} alt="Hotles" />
      <a>{props.name}</a>
      <p>{props.city}</p>
      <p className="hotel_3">Stating from ${props.price}</p>

      <div className="hotel_1">
        <p className="hotel_2">{props.rate}</p>
        <p>{props.type}</p>
      </div>
    </div>
  );
};

export default Hotels;
