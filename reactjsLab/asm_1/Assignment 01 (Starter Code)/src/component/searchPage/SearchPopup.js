import React from "react";
import "./SearchPopup.css";

const SearchPopup = (props) => {
  return (
    <div className="search">
      <h1 className="search_0">Search</h1>
      <div>
        <p className="search_1">Destination</p>
        <input className="search_2" type="text" />
      </div>
      <div>
        <p className="search_1">Check-in Date</p>
        <input
          className="search_2"
          type="text"
          placeholder="06/24/2022 to 06/24/2022"
        />
      </div>
      <div>
        <p className="search_1">Options</p>
        <div className="search_3">
          <p className="search_4">Min price per night</p>
          <input className="" type="text" size="2" />
        </div>
        <div className="search_3">
          <p className="search_4">Max price per night</p>
          <input className="" type="text" size="2" />
        </div>
        <div className="search_3">
          <p className="search_4">adult</p>
          <input className="" type="text" placeholder="1" size="2" />
        </div>
        <div className="search_3">
          <p className="search_4">chidren</p>
          <input className="" type="text" placeholder="0" size="2" />
        </div>
        <div className="search_3">
          <p className="search_4">room</p>
          <input className="" type="text" placeholder="1" size="2" />
        </div>
        <button className="search_5">Search</button>
      </div>
    </div>
  );
};

export default SearchPopup;
