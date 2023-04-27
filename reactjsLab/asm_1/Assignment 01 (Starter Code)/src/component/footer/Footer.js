import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="footer">
      <div>
        <div>{props.col_values}</div>
        {/* <ul>
          {props.footerEnd.col_values.map((footer) => (
            <li>{footer}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default Footer;
