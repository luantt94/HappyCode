import "./imgHotelList.css";

const hotelList = [
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

const ImgHotelList = () => {
  return (
    <div className="container">
      <h2>Homes guests love</h2>
      <div className="row list">
        {hotelList.map((hotelList) => (
          <div className="col-sm-3">
            <img src={hotelList.image_url} alt="hotel"></img>
            <h5 className="mt-2">
              <a href="/detail">{hotelList.name}</a>
            </h5>
            <p>{hotelList.city}</p>
            <h5>Stating from ${hotelList.price}</h5>
            <div className="d-flex align-items-center">
              <p className="bg-primary text-white p-1 ">{hotelList.rate}</p>
              <p className="ms-1">{hotelList.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgHotelList;
