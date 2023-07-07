import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import axios from '../../utils/axios';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsername = e => {
    setUsername(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const data = { username, password };

    try {
      const request = await axios.post('/login', data);
      if (request.status === 200) {
        const user = JSON.stringify(request.data);
        localStorage.setItem('userData', user);
        if (JSON.parse(user).isAdmin) navigate('/admin/dashboard');
        else navigate('/');
      }
    } catch (err) {
      setUsername('');
      setPassword('');
      alert('Log In Failed');
    }

    console.log('Username: ', username);
    console.log('Password: ', password);
  };

  return (
    <div>
      <Navbar />
      <div className="loginContainer">
        <h1>Login</h1>
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="loginInputContainer">
            <input
              type="text"
              id="username"
              value={username}
              placeholder=" Enter your username"
              onChange={handleUsername}
            />
          </div>
          <div className="loginInputContainer">
            <input
              type="password"
              id="password"
              value={password}
              placeholder=" Enter your password"
              onChange={handlePassword}
            />
          </div>
          <div className="buttonContainer">
            <button type="submit">Log In</button>
            <a href="./forgot-password">Forgot Password ?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
