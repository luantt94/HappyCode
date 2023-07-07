import './bookingForm.css';
import { useEffect, useState } from 'react';
import { DateRange } from 'react-date-range';
import axios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';

function BookingForm({ currentUser, hotelData }) {
  const [room, setRoom] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [idNum, setIdNum] = useState('');
  const [payment, setPayment] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/rooms?hotel=${hotelData._id}`);
      setRoom(request.data);
      return request;
    }
    fetchData();
  }, [hotelData]);

  const handleDateChange = item => {
    setDate([item.selection]);
  };

  const handleCheckBoxChange = event => {
    const value = {
      num: event.target.name,
      price: event.target.value,
    };
    if (event.target.checked) {
      setSelectedRooms(selectedRoom => [...selectedRoom, value]);
    } else {
      setSelectedRooms(selectedRoom =>
        selectedRoom.filter(val => val.num !== value.num)
      );
    }
  };

  const totalBill = selectedRooms.reduce((sum, value) => sum + +value.price, 0);

  const handleSubmit = async () => {
    const data = {
      user: currentUser,
      idNum: idNum,
      room: selectedRooms,
      dateStart: date[0].startDate,
      dateEnd: date[0].endDate,
      hotel: hotelData,
      price: totalBill,
      payment: payment,
      status: 'Booked',
      createdAt: new Date(),
    };

    try {
      const response = await axios.post('/reserve', { data });
      if (response.status === 200) navigate('../../transaction');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="booking">
      <div className="bookingContainer">
        <div className="calen">
          <h2>Dates</h2>
          <DateRange
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            minDate={new Date()}
            ranges={date}
            onChange={handleDateChange}
          />
        </div>
        <div className="bookingWrapper">
          <h2>Reserve Info</h2>
          <div className="bookingInputContainer">
            <label htmlFor="fullname">Your Full Name: </label>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="bookingInputContainer">
            <label htmlFor="fullname">Your Email: </label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="bookingInputContainer">
            <label htmlFor="fullname">Your Phone Number: </label>
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <div className="bookingInputContainer">
            <label htmlFor="fullname">Your Identity Card Number: </label>
            <input
              type="text"
              placeholder="Card Number"
              value={idNum}
              onChange={e => setIdNum(e.target.value)}
            />
          </div>
        </div>
      </div>
      <br />
      <h2>Select Rooms</h2>
      <div className="bookingContainer select-room">
        {room.length > 0 ? (
          room.map((r, i) => {
            if (new Date(r.updatedAt) <= date[0].startDate)
              return (
                <div className="bookingContent room" key={i}>
                  <div className="bookingDetails">
                    <h3>{r.title}</h3>
                    <p>{r.desc}</p>
                    <p>Max People: {r.maxPeople}</p>
                    <p>${r.price}</p>
                  </div>
                  <div className="bookingCheckBox">
                    {r.roomNumbers.length > 0
                      ? r.roomNumbers.map((num, i) => (
                          <div className="checkbox-container" key={i}>
                            <p>{num}</p>
                            <input
                              type="checkbox"
                              value={r.price}
                              name={num}
                              onChange={handleCheckBoxChange}
                            />
                          </div>
                        ))
                      : ''}
                  </div>
                </div>
              );
            else return <div></div>;
          })
        ) : (
          <div className="bookingWrapper">
            <p>No room available !</p>
          </div>
        )}
      </div>
      <br />
      <h2>Total Bill: ${totalBill}</h2>
      <div className="bookingContainer">
        <div className="bookingWrapper">
          <select
            className="custom"
            defaultValue=""
            onChange={e => setPayment(e.target.value)}
          >
            <option value="" hidden>
              Select Payment Method
            </option>
            <option value="Credit Card">Credit Card</option>
            <option value="Visa">Visa</option>
            <option value="Cash">Cash</option>
            <option value="MoMo">MoMo</option>
            <option value="ZaloPay">ZaloPay</option>
          </select>
          <button onClick={handleSubmit}>Reserve Now</button>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
