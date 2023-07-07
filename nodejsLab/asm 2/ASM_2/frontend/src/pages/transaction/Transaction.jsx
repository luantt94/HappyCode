import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './transaction.css';
import axios from '../../utils/axios';
import dayjs from 'dayjs';

function Transaction() {
  const [user, setUser] = useState({});
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    setUser(userData);

    async function fetchData() {
      const request = await axios.post(`/transaction`, { user: userData });
      setTransaction(request.data);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar user={user} />
      <div className="transContainer">
        {transaction.length > 0 ? (
          <div className="trans-table">
            <h2>Your transaction</h2>
            <table>
              <thead>
                <tr className="trans-head">
                  <th>STT</th>
                  <th>Hotel</th>
                  <th>Room</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Payment Method</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {transaction.map((trans, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{trans.hotel.name}</td>
                      <td>
                        {trans.room.map((r, i) =>
                          i === 0 ? r.num : `, ${r.num}`
                        )}
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
        ) : (
          <h1 className="trans">You haven't made any transaction !</h1>
        )}
      </div>
      <div className="trans-footer"></div>
    </div>
  );
}

export default Transaction;
