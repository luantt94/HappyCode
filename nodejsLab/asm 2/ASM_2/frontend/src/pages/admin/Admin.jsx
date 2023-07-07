import './admin.css';
import { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import DashBoard from '../../components/dashboard/DashBoard';
import HotelList from '../../components/hotelList/HotelList';
import RoomList from '../../components/RoomList/RoomList';
import TransList from '../../components/transList/TransList';
import AddHotel from '../../components/addHotel/AddHotel';
import AddRoom from '../../components/addRoom/addRoom';

function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handletabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="navbar purple">
        <div className="navContainer admin">
          <h3>Admin</h3>
        </div>
      </div>
      <div className="admin-container">
        <Sidebar activeTab={activeTab} onTabClick={handletabClick} />
        {activeTab === 'dashboard' && <DashBoard />}
        {activeTab === 'hotels' && (
          <HotelList activeTab={activeTab} onTabClick={handletabClick} />
        )}
        {activeTab === 'rooms' && (
          <RoomList activeTab={activeTab} onTabClick={handletabClick} />
        )}
        {activeTab === 'transactions' && (
          <TransList activeTab={activeTab} onTabClick={handletabClick} />
        )}
        {activeTab === 'add-hotel' && (
          <AddHotel activeTab={activeTab} onTabClick={handletabClick} />
        )}
        {activeTab === 'add-room' && (
          <AddRoom activeTab={activeTab} onTabClick={handletabClick} />
        )}
      </div>
    </div>
  );
}

export default Admin;
