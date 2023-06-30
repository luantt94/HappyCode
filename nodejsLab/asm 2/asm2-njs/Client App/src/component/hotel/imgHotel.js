import "./imgHotel.css";
const ImgHotel = () => {
  const hotel = [
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
  ];

  return (
    <div className="container">
      <h2 className="mb-3">Browse by property type</h2>
      <div className=" d-flex hotel">
        {hotel.map((hotel) => (
          <div>
            <img src={hotel.image} alt="a beauty city"></img>
            <h4>
              <strong>{hotel.name}</strong>
            </h4>
            <p>{hotel.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImgHotel;
