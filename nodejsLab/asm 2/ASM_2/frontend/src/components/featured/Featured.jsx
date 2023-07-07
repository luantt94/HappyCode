import { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import hanoi from '../../images/HaNoi.jpg';
import danang from '../../images/DaNang.jpg';
import hcm from '../../images/HCM.jpg';
import './featured.css';

function Featured({ fetchUrl }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setCities(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const image = [hanoi, danang, hcm];

  return (
    <div className="featured">
      {cities.map((city, i) => {
        return (
          <div key={city.name} className="featuredItem">
            <img src={image[i]} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>{city.name}</h1>
              <h2>{city.count} properties</h2>
            </div>
          </div>
        );
      })}

      {/* <div className="featuredItem">
        <img src={hcm} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src={danang} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div> 
    </div> */}
    </div>
  );
}

export default Featured;
