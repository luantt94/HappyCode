import './addHotel.css';
import { useEffect, useState } from 'react';
import axios from '../../utils/axios';

function AddHotel({ activeTab, onTabClick }) {
  const [data, setData] = useState({
    name: 'My Hotel',
    city: 'Ha Noi',
    distance: '500',
    desc: 'Description',
    photos: [],
    type: 'hotel',
    address: '74 Chien Thang',
    title: 'The Best Hotel',
    price: 100,
    featured: false,
    rooms: [],
  });
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('/all-rooms');
      setRooms(request.data);
      return request;
    }
    fetchData();
  });

  const handleChange = e => {
    e.preventDefault();
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleRoomSelect = e => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setData(prevData => {
      if (isChecked) {
        return { ...prevData, rooms: [...prevData.rooms, value] };
      } else {
        return {
          ...prevData,
          rooms: prevData.rooms.filter(room => room !== value),
        };
      }
    });
    // console.log(data.rooms);
  };

  const handleSubmit = async () => {
    console.log(data);

    try {
      const response = await axios.post('/add-hotel', { data });
      if (response.status === 200) onTabClick('hotels');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="content">
      <div className="card-large shadow ">
        <h1>Thêm Khách sạn</h1>
        <div className="add-form">
          <div className="column">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={data.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={data.city}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="distance">Distance from City center</label>
              <input
                type="text"
                id="distance"
                value={data.distance}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="desc"
                value={data.desc}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input type="file" id="image" multiple />
            </div>
          </div>
          <div className="column">
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <input
                type="text"
                id="type"
                value={data.type}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={data.address}
                onChange={handleChange}
              />
            </div>
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
              <label htmlFor="featured">Featured</label>
              <select
                id="featured"
                value={data.featured}
                onChange={handleChange}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
          </div>
        </div>
        <div className="room-list">
          <h3>Rooms</h3>
          <div className="checkbox-list">
            <div className="scrollable-list">
              {rooms.map((room, i) => {
                return (
                  <label key={i}>
                    <input
                      type="checkbox"
                      value={room._id}
                      checked={data.rooms.includes(room._id)}
                      onChange={handleRoomSelect}
                    />
                    {room.title}
                  </label>
                );
              })}
            </div>
          </div>
        </div>
        <div className="room-list">
          <button onClick={handleSubmit}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default AddHotel;
