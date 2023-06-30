import Header from "../header/header";
import "./navbar.css";
const navbarList = [
  {
    type: "Stays",
    icon: "fa-bed",
    active: true,
  },
  {
    type: "Flights",
    icon: "fa-plane",
    active: false,
  },
  {
    type: "Car rentals",
    icon: "fa-car",
    active: false,
  },
  {
    type: "Attractions",
    icon: "fa-bed",
    active: false,
  },
  {
    type: "Airport taxis",
    icon: "fa-taxi",
    active: false,
  },
];
const Navbar = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="d-flex justify-content-between pt-3">
          <div>
            <h2>Booking Website</h2>
          </div>
          <div>
            <button className="mx-3 btn btn btn-light">Register</button>
            <button className="btn btn btn-light">Login</button>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-start ">
            {navbarList.map((data) => (
              <div className="d-flex align-items-center mx-4 mt-4 nav1">
                <i className={"fa " + data.icon}></i>
                <div className="ms-2">{data.type}</div>
              </div>
            ))}
          </div>
        </div>
        <Header />
      </div>
    </div>
  );
};

export default Navbar;
