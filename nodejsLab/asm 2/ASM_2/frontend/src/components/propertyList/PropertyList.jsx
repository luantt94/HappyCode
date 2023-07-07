import { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import hotel from '../../images/type_1.webp';
import apartment from '../../images/type_2.jpg';
import resort from '../../images/type_3.jpg';
import villa from '../../images/type_4.jpg';
import cabin from '../../images/type_5.jpg';
import './propertyList.css';

function PropertyList({ fetchUrl }) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setTypes(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const image = [hotel, apartment, resort, villa, cabin];

  const upFirst = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="pList">
      {types.map((type, i) => {
        return (
          <div key={type.name} className="pListItem">
            <img src={image[i]} alt={type.name} className="pListImg" />
            <div className="pListTitles">
              <h1>{upFirst(type.name)}</h1>
              <h2>
                {type.count} {type.name}s
              </h2>
            </div>
          </div>
        );
      })}

      {/* <div className="pListItem">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>2331 hotels</h2>
        </div>
      </div> */}
    </div>
  );
}

export default PropertyList;
