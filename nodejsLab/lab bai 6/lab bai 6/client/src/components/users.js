import { useState, useEffect } from "react";
import axios from "axios";
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => setUsers(response.data));
  }, []);

  if (users.length === 0) {
    return (
      <div>
        <a href="/">Enter User</a>
        <a href="/users">Users</a>
        <div>
          <h2>USERS</h2>
          <h2>NO USERS FOUND</h2>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <a href="/">Enter User</a>
        <a href="/users">Users</a>
      </div>

      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Users;
