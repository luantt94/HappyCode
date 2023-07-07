import { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import dayjs from 'dayjs';

function TransList() {
  const [allTrans, setAllTrans] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('/all-trans');
      setAllTrans(request.data);
      return request;
    }
    fetchData();
  });

  return (
    <div className="content">
      <div className="card-large shadow">
        <h1>Danh sách Giao dịch</h1>
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
            {allTrans.map((trans, i) => {
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

export default TransList;
