import React from "react";
import './NavbarItem.css'

const NavbarItem = (props) => {

  return(
    <div>
      <ul className="navbar_2">
        <li>{props.type}</li>
        <li>Flight</li>
        <li>Car rentals</li>
        <li>Attractions</li>
        <li>Airport taxis</li>
      </ul>
    </div>
  )
}

export default NavbarItem;