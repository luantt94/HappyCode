import React from "react";
import Navbar from "../navbar/Navbar";
import Tity from "../city/Tity";

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

  return (
    <div>
      <Navbar navbarList={navbarList} />

      <Tity
        name={imageCity[0].name}
        subText={imageCity[0].subText}
        image={imageCity[0].image}
      />
      <Tity
        name={imageCity[1].name}
        subText={imageCity[1].subText}
        image={imageCity[1].image}
      />
      <Tity
        name={imageCity[2].name}
        subText={imageCity[2].subText}
        image={imageCity[2].image}
      />
    </div>
  );
};

export default Home;
