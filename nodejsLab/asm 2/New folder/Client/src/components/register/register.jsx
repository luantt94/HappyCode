import "./register.css";
import Navbar from "../navbar/Navbar";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => {
    return axios.post("/register", data).then((res) => {
      alert(res.data);
      if (res.data === "User created!") {
        navigate("/login");
      }
    });
  };
  return (
    <div>
      <Navbar />
      <form className="formReg" onSubmit={handleSubmit(handleRegistration)}>
        <h1 className="headerReg">Sign Up</h1>
        <div>
          <div>
            <h5 className="username">Username</h5>
          </div>
          <div>
            <input
              className="usernameInput"
              name="username"
              type="text"
              {...register("username", { required: true })}
            />
          </div>
        </div>
        <div>
          <div>
            <h5 className="password">Password</h5>
          </div>
          <div>
            <input
              className="passwordInput"
              name="password"
              type="password"
              {...register("password", { required: true })}
            />
          </div>
        </div>
        <button className="buttonReg">Register</button>
      </form>
    </div>
  );
};

export default Register;
