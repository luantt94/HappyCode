import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../utils/axios";

import hotel_detail_1 from "../../images/hotel_detail_1.jpg";
import hotel_detail_2 from "../../images/hotel_detail_2.jpg";
import hotel_detail_3 from "../../images/hotel_detail_3.jpg";
import hotel_detail_4 from "../../images/hotel_detail_4.jpg";
import hotel_detail_5 from "../../images/hotel_detail_5.jpg";
import hotel_detail_6 from "../../images/hotel_detail_6.jpg";

import BookingForm from "../../components/bookingform/BookingForm";

function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [hotelData, setHotelData] = useState([]);
  const hotelId = useParams().id;
  const [user, setUser] = useState({});
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    setUser(userData);
  }, []);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/hotels/${hotelId}`);
      setHotelData(request.data);
      return request;
    }
    fetchData();
  }, [hotelId]);

  const photos = [
    hotel_detail_1,
    hotel_detail_2,
    hotel_detail_3,
    hotel_detail_4,
    hotel_detail_5,
    hotel_detail_6,
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const toggleForm = () => {
    setFormOpen(!formOpen);
  };

  return (
    <div>
      <Navbar user={user} />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber]} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow" onClick={toggleForm}>
            Reserve or Book Now!
          </button>
          <h1 className="hotelTitle">{hotelData.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{hotelData.address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location – {hotelData.distance}m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {hotelData.photos
              ? hotelData.photos.map((photo, i) => (
                  <div className="hotelImgWrapper" key={i}>
                    <img
                      onClick={() => handleOpen(i)}
                      src={photo}
                      alt=""
                      className="hotelImg"
                    />
                  </div>
                ))
              : ""}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{hotelData.title}</h1>
              <p className="hotelDesc">{hotelData.desc}</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>${hotelData.cheapestPrice}</b> (1 nights)
              </h2>
              <button onClick={toggleForm}>Reserve or Book Now!</button>
            </div>
          </div>
          <div className="hotelForm"></div>
          {formOpen ? (
            <BookingForm currentUser={user} hotelData={hotelData} />
          ) : (
            ""
          )}
        </div>
        <MailList />
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default Hotel;
