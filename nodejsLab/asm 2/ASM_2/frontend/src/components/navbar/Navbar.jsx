import { useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbar({ user }) {
  const navigate = useNavigate();

  const isLogIn = () => {
    if (user) {
      return (
        <div>
          <span>{user.email}</span>
          <button className="navButton">
            <a href="http://localhost:3000/transaction">Transactions</a>
          </button>
          <button className="navButton" onClick={handleClick}>
            Log out
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button className="navButton">Register</button>
          <button className="navButton">
            <a href="./login">Log in</a>
          </button>
        </div>
      );
    }
  };

  const handleClick = e => {
    e.preventDefault();
    localStorage.removeItem('userData');
    navigate('/login');
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          <a className="home" href="/">
            Booking Website
          </a>
        </span>
        <div className="navItems">{isLogIn()}</div>
      </div>
    </div>
  );
}

export default Navbar;
