import { useEffect, useState } from 'react';
import axios from '../../utils/axios';

function AddRoom({ activeTab, onTabClick }) {
  const [hotels, setHotels] = useState([]);
  const [data, setData] = useState({
    title: '2 Bed Room',
    price: 100,
    desc: 'King size bed, 1 bathroom',
    maxPeople: 2,
    roomNumbers: [],
    hotel: hotels[0] ? hotels[0]._id : '',
  });

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('/all-hotels');
      setHotels(request.data);
      return request;
    }
    fetchData();
  });

  const handleChange = e => {
    e.preventDefault();
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const hasDuplicates = array => {
    return new Set(array).size !== array.length;
  };

  const handleTextArea = e => {
    const value = e.target.value;
    const numbers = value.replace(/\s/g, '').split(',').map(Number);
    console.log(numbers);

    if (numbers.some(isNaN)) {
      alert('Hãy điền giá trị hợp lệ !!');
      return;
    } else if (hasDuplicates(numbers)) {
      alert('Có giá trị trùng lặp !!');
      return;
    } else setData({ ...data, roomNumbers: numbers });
  };

  const handleSubmit = async () => {
    console.log(data);

    try {
      const response = await axios.post('/add-room', { data });
      if (response.status === 200) onTabClick('rooms');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="content">
      <div className="card-large shadow ">
        <h1>Thêm Phòng</h1>
        <div className="add-form">
          <div className="column">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={data.title}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                value={data.price}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="roomNumbers">Room Numbers</label>
              <textarea
                id="roomNumbers"
                cols="30"
                rows="2"
                placeholder="give comma between room numbers. Ex: 101, 202, ..."
                onBlur={handleTextArea}
              ></textarea>
            </div>
          </div>

          <div className="column">
            <div className="form-group">
              <label htmlFor="desc">Description</label>
              <input
                type="text"
                id="desc"
                value={data.desc}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="maxPeople">Max People</label>
              <input
                type="text"
                id="maxPeople"
                value={data.maxPeople}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="hotel">Choose A Hotel</label>
              <select id="hotel" onChange={handleChange} defaultValue="">
                <option value="" hidden>
                  Choose a Hotel
                </option>
                {hotels.map((hotel, i) => {
                  return (
                    <option key={i} value={hotel._id}>
                      {hotel.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="room-list"></div>
        <div className="room-list">
          <button onClick={handleSubmit}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default AddRoom;
