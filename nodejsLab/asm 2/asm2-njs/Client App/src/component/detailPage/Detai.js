import React from "react";
import "./Detai.css";

const Detai = (props) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="detail_1">
        <div>
          <h1>{props.detailPage.name}</h1>
          <p>
            <span>icon</span> {props.detailPage.address}
          </p>
          <h4 className="detail_1_1">{props.detailPage.distance}</h4>
          <h4 className="detail_1_2">{props.detailPage.price}</h4>
        </div>

        <div>
          <button className="detail_butt">Reserve or Book Now</button>
        </div>
      </div>

      <div className="detai_2">
        {props.detailPage.photos.map((photo) => (
          <div className="detai_img">
            <img src={photo} alt="detail photos" className="detai_img1" />
          </div>
        ))}
      </div>
      <div className="detail_3">
        <div className="detail_3_1">
          <h2 className="detail_3_1_1">{props.detailPage.title}</h2>
          <p>
            Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
            Street Apartments has accommodations with air conditioning and free
            WiFi. The units come with hardwood floors and feature a fully
            equipped kitchenette with a microwave, a flat-screen TV, and a
            private bathroom with shower and a hairdryer. A fridge is also
            offered, as well as an electric tea pot and a coffee machine.
            Popular points of interest near the apartment include Cloth Hall,
            Main Market Square and Town Hall Tower. The nearest airport is John
            Paul II International Kraków–Balice, 16.1 km from Tower Street
            Apartments, and the property offers a paid airport shuttle service.
          </p>
        </div>

        <div className="detail_3_2">
          <h4 className="detail_3_2_1">Prefect for a 9-night stay!</h4>
          <p className="detail_3_2_2">
            Located in the real heart of Krakow, this property has excellent
            location score of 9.8!
          </p>
          <h2 className="detail_3_5">
            $945<span className="detail_3_3">(9 night)</span>
          </h2>
          <button className="detail_3_4">Reserve or Book Now!</button>
        </div>
      </div>
    </div>
  );
};

export default Detai;
