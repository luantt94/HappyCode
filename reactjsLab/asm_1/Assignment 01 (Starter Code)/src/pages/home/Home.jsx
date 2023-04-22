import React from "react";
import Navbar from "../navbar/Navbar";
import Tity from "../city/Tity";
import Hotels from "../hotels/Hotels";
import Type from "../imageType/Type";
import Form from "../form/Form";
import Footer from "../footer/Footer";

const Home = () => {
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

  const imageCity = [
    {
      name: "Dublin",
      subText: "123 properties",
      image: "./images/city_1.webp",
    },
    {
      name: "Reno",
      subText: "533 properties",
      image: "./images/city_2.webp",
    },
    {
      name: "Austin",
      subText: "532 properties",
      image: "./images/city_3.webp",
    },
  ];

  const image_type = [
    {
      name: "Hotels",
      count: 233,
      image: "./images/type_1.webp",
    },
    {
      name: "Apartments",
      count: 2331,
      image: "./images/type_2.jpg",
    },
    {
      name: "Resorts",
      count: 2331,
      image: "./images/type_3.jpg",
    },
    {
      name: "Villas",
      count: 2331,
      image: "./images/type_4.jpg",
    },
    {
      name: "Cabins",
      count: 2331,
      image: "./images/type_5.jpg",
    },
    {
      name: "Resorts",
      count: 2331,
      image: "./images/type_3.jpg",
    },
  ];

  ///
  const imageHotel = [
    {
      name: "Aparthotel Stare Miasto",
      city: "Madrid",
      price: 120,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_1.webp",
    },
    {
      name: "Comfort Suites Airport",
      city: "Austin",
      price: 140,
      rate: 9.3,
      type: "Exceptional",
      image_url: "./images/hotel_2.jpg",
    },
    {
      name: "Four Seasons Hotel",
      city: "Lisbon",
      price: 99,
      rate: 8.8,
      type: "Excellent",
      image_url: "./images/hotel_3.jpg",
    },
    {
      name: "Hilton Garden Inn",
      city: "Berlin",
      price: 105,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_4.jpg",
    },
  ];

  const footerEnd = [
    {
      col_number: 1,
      col_values: [
        "Countries",
        "Regions",
        "Cities",
        "Districts",
        "Airports",
        "Hotels",
      ],
    },
    {
      col_number: 2,
      col_values: [
        "Homes",
        "Apartments",
        "Resorts",
        "Villas",
        "Hostels",
        "Guest houses",
      ],
    },
    {
      col_number: 3,
      col_values: [
        "Unique places to stay",
        "Reviews",
        "Unpacked: Travel articles",
        "Travel communities",
        "Seasonal and holiday deals",
      ],
    },
    {
      col_number: 4,
      col_values: [
        "Car rental",
        "Flight Finder",
        "Restaurant reservations",
        "Travel Agents",
      ],
    },
    {
      col_number: 5,
      col_values: [
        "Curtomer Service",
        "Partner Help",
        "Careers",
        "Sustainability",
        "Press center",
        "Safety Resource Center",
        "Investor relations",
        "Terms & conditions",
      ],
    },
  ];
  return (
    <div>
      <Navbar navbarList={navbarList} />

      <div className="row">
        <div className="col-sm-2 "></div>
        <div className="col-sm-8 ">
          <div className="row ">
            {imageCity.map((city) => (
              <div className="col-sm-4 ">
                <Tity
                  name={city.name}
                  subText={city.subText}
                  image={city.image}
                />
              </div>
            ))}
          </div>
          <h3>Browse by property type</h3>
          <div className="row ">
            {image_type.map((type) => (
              <div className="col-sm-2">
                <Type name={type.name} count={type.count} image={type.image} />
              </div>
            ))}
          </div>
          <h3>Homes guests love</h3>
          <div className="row ">
            {imageHotel.map((hotel) => (
              <div className="col-sm-3">
                <Hotels
                  name={hotel.name}
                  city={hotel.city}
                  price={hotel.price}
                  rate={hotel.rate}
                  type={hotel.type}
                  image_url={hotel.image_url}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-sm-2 "></div>
      </div>
      <Form />
      <div>
        {footerEnd.map((footer) => (
          <div>
            <Footer
              col_number={footer.col_number}
              col_values={footer.col_values}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
