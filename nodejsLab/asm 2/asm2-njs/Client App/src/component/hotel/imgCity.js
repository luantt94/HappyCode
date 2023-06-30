import "./imgCity.css";

const ImgCity = () => {
  const city = [
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
    <div className="container d-flex mt-5 pt- city">
      {city.map((city) => (
        <div>
          <img src={city.image} alt="a beauty city"></img>
          <h4>
            <strong>{city.name}</strong>
          </h4>
          <p>{city.subText}</p>
        </div>
      ))}
    </div>
  );
};

export default ImgCity;
