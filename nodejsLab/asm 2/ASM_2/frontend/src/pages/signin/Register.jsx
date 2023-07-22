import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import axios from "../../utils/axios";
import "./register.css";
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
      <form className="form" onSubmit={handleSubmit(handleRegistration)}>
        <h1 className="headerReg">SIGN UP</h1>
        <div>
          <div>
            <label className="username">Username</label>
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
            <label className="password">Password</label>
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
        <div>
          <div>
            <label className="email">Email</label>
          </div>
          <div>
            <input
              className="emailInput"
              name="email"
              type="email"
              {...register("email", { required: true })}
            />
          </div>
        </div>
        <div>
          <div>
            <label className="fullName">Full Name</label>
          </div>
          <div>
            <input
              className="fullNameInput"
              name="fullName"
              type="text"
              {...register("fullName", { required: true })}
            />
          </div>
        </div>
        <div>
          <div>
            <label className="phoneNumber">Phone Number</label>
          </div>
          <div>
            <input
              className="phoneNumberInput"
              name="phoneNumber"
              type="text"
              {...register("phoneNumber", { required: true })}
            />
          </div>
        </div>
        <button className="buttonReg">Register</button>
      </form>
    </div>
  );
};

export default Register;
