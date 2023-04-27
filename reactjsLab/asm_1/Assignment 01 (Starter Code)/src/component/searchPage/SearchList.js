import React from "react";
import "./SearchList.css";

const SearchList = (props) => {
  return (
    <div>
      <div className="sesrchlist">
        <div className="sesrchlist_1">
          <img className="image_s" src={props.image_url} alt="Hotles" />
        </div>
        <div className="sesrchlist_2">
          <h4 className="sesrchlist_2_1">{props.name}</h4>
          <p>{props.distance} from center</p>
          <button className="sesrchlist_2_2">{props.tag}</button>
          <p className="sesrchlist_2_3">{props.description}</p>
          <p>{props.type}</p>
          {props.free_cancel === true && (
            <div>
              <p className="sesrchlist_2_4">Free cancellation</p>
              <p className="sesrchlist_2_5">
                you can cancel later, so lock in this gr today
              </p>
            </div>
          )}
        </div>
        <div className="sesrchlist_3">
          <div className="sesrchlist_4">
            <p className="sesrchlist_4_1">{props.rate_text}</p>
            <p className="sesrchlist_4_2">{props.rate}</p>
          </div>
          <p className="sesrchlist_4_3">{props.price}</p>
          <p className="sesrchlist_4_4">includes taxes and fees</p>
          <button className="sesrchlist_4_5">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchList;
