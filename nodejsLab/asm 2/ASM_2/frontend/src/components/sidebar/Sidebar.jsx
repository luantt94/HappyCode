import './sidebar.css';
import {
  faUser,
  faHotel,
  faCreditCard,
  faMoneyBillTransfer,
  faShop,
  faRightFromBracket,
  faTable,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function Sidebar({ activeTab, onTabClick }) {
  const navigate = useNavigate();

  const handleClick = e => {
    e.preventDefault();
    localStorage.removeItem('userData');
    navigate('/');
  };

  return (
    <div className="admin-sidebar">
      <ul className="admin-sidebar-list">
        <li className="admin-sidebar-item">
          <h3>Main</h3>
          <ul className="sublist">
            <li>
              <FontAwesomeIcon icon={faTable} />
              <button
                className={
                  activeTab === 'dashboard'
                    ? 'sidebarButton activeTab'
                    : 'sidebarButton'
                }
                onClick={() => onTabClick('dashboard')}
              >
                Dash Board
              </button>
            </li>
          </ul>
        </li>
        <li className="sidebar-item">
          <h3>Lists</h3>
          <ul className="sublist">
            <li>
              <FontAwesomeIcon icon={faUser} />
              <button
                className={
                  activeTab === 'users'
                    ? 'sidebarButton activeTab'
                    : 'sidebarButton'
                }
                onClick={() => onTabClick('users')}
              >
                Users
              </button>
            </li>
            <li>
              <FontAwesomeIcon icon={faHotel} />
              <button
                className={
                  activeTab === 'hotels'
                    ? 'sidebarButton activeTab'
                    : 'sidebarButton'
                }
                onClick={() => onTabClick('hotels')}
              >
                Hotels
              </button>
            </li>
            <li>
              <FontAwesomeIcon icon={faCreditCard} />
              <button
                className={
                  activeTab === 'rooms'
                    ? 'sidebarButton activeTab'
                    : 'sidebarButton'
                }
                onClick={() => onTabClick('rooms')}
              >
                Rooms
              </button>
            </li>
            <li>
              <FontAwesomeIcon icon={faMoneyBillTransfer} />
              <button
                className={
                  activeTab === 'transactions'
                    ? 'sidebarButton activeTab'
                    : 'sidebarButton'
                }
                onClick={() => onTabClick('transactions')}
              >
                Transactions
              </button>
            </li>
          </ul>
        </li>
        <li className="sidebar-item">
          <h3>New</h3>
          <ul className="sublist">
            <li>
              <FontAwesomeIcon icon={faShop} />
              <button
                className={
                  activeTab === 'add-hotel'
                    ? 'sidebarButton activeTab'
                    : 'sidebarButton'
                }
                onClick={() => onTabClick('add-hotel')}
              >
                New Hotel
              </button>
            </li>
            <li>
              <FontAwesomeIcon icon={faCreditCard} />
              <button
                className={
                  activeTab === 'add-room'
                    ? 'sidebarButton activeTab'
                    : 'sidebarButton'
                }
                onClick={() => onTabClick('add-room')}
              >
                New Room
              </button>
            </li>
          </ul>
        </li>
        <li className="sidebar-item">
          <h3>User</h3>
          <ul className="sublist">
            <li>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <button className="sidebarButton" onClick={handleClick}>
                Log Out
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
