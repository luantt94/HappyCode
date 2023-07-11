import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import "./featuredProperties.css";
// import hotel1 from "../../images/hotel_1.webp";
// import hotel2 from "../../images/hotel_2.jpg";
// import hotel3 from "../../images/hotel_3.jpg";
// import hotel4 from "../../images/hotel_4.jpg";

function FeaturedProperties({ fetchUrl }) {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setHotels(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // const image = [hotel1, hotel2, hotel3, hotel4];

  return (
    <div className="fp">
      {hotels.map((hotel, i) => {
        return (
          <div key={i} className="fpItem">
            <img
              src={hotel.photos[0] ? hotel.photos[0] : ""}
              alt={hotel.name}
              className="fpImg"
            />
            <span className="fpName">
              <a
                href={"./hotels/" + hotel._id}
                rel="noreferrer"
                target="_blank"
              >
                {hotel.name}
              </a>
            </span>
            <span className="fpCity">{hotel.city}</span>
            <span className="fpPrice">
              Starting from ${hotel.cheapestPrice}
            </span>
          </div>
        );
      })}

      {/* <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">
          <a href="./hotels/0" target="_blank">
            Comfort Suites Airport
          </a>
        </span>
        <span className="fpCity">Austin</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">
          <a href="./hotels/0" target="_blank">
            Four Seasons Hotel
          </a>
        </span>
        <span className="fpCity">Lisbon</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">
          <a href="./hotels/0" target="_blank">
            Hilton Garden Inn
          </a>
        </span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div> */}
    </div>
  );
}

export default FeaturedProperties;
