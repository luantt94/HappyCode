import './dashBoard.css';
import { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import dayjs from 'dayjs';

function DashBoard() {
  const [recentTrans, setRecentTrans] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('/recent-trans');
      setRecentTrans(request.data);
      return request;
    }
    fetchData();
  });
  return (
    <div className="content">
      <div className="card-row">
        <div className="card shadow">
          <span className="card-label">Users</span>
          <span className="count">100</span>
        </div>
        <div className="card shadow">
          <span className="card-label">Orders</span>
          <span className="count">100</span>
        </div>
        <div className="card shadow">
          <span className="card-label">Earning</span>
          <span className="count">100</span>
        </div>
        <div className="card shadow">
          <span className="card-label">Balance</span>
          <span className="count">100</span>
        </div>
      </div>
      <div className="card-large shadow">
        <h1>Giao dịch gần đây</h1>
        <table className="admin-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>ID</th>
              <th>User</th>
              <th>Hotel</th>
              <th>Room</th>
              <th>Date</th>
              <th>Price</th>
              <th>Payment Method</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentTrans.map((trans, i) => {
              return (
                <tr key={i}>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <td>{trans._id}</td>
                  <td>{trans.user.fullName}</td>
                  <td>{trans.hotel.name}</td>
                  <td>
                    {trans.room.map((r, i) => (i === 0 ? r.num : `, ${r.num}`))}
                  </td>
                  <td>
                    {dayjs(trans.dateStart).format('DD/MM/YYYY')} -{' '}
                    {dayjs(trans.dateEnd).format('DD/MM/YYYY')}
                  </td>
                  <td>${trans.price}</td>
                  <td>{trans.payment}</td>
                  <td>{trans.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashBoard;
