import { useEffect, useState } from 'react';
import axios from '../../utils/axios';

function RoomList({ activeTab, onTabClick }) {
  const [allRoom, setAllRoom] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('/all-rooms');
      setAllRoom(request.data);
      return request;
    }
    fetchData();
  });

  return (
    <div className="content">
      <div className="card-large shadow">
        <div className="head">
          <h1>Danh sách Phòng</h1>
          <button
            className="btn btn-outline-success"
            onClick={() => onTabClick('add-room')}
          >
            Add New
          </button>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Max People</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allRoom.map((room, i) => {
              return (
                <tr key={i}>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <td>{room._id}</td>
                  <td>{room.title}</td>
                  <td>{room.desc}</td>
                  <td>${room.price}</td>
                  <td>{room.maxPeople}</td>
                  <td>
                    <button className="btn btn-outline-danger adjust">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RoomList;
