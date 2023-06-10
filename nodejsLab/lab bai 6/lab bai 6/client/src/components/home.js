import axios from "axios";
import { useState } from "react";
const addUser = async (name) => {
  try {
    const response = await axios.post("http://localhost:5000/users", { name });
    console.log(response.data);
    window.location.href = "/users";
  } catch (error) {
    console.error(error);
  }
};
const Home = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <a href="/">Enter User</a>
        <a href="/users">Users</a>
      </div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Home;
