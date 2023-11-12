import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    buttonText: "Submit",
  });

  const { username, email, password, phone, buttonText } = values;

  const handleChange = (name) => (event) => {
    // console.log(event.target.value);
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = async (values, actions) => {
    axios({
      method: "POST",
      url: "http://localhost:5000/api/auth/register",
      data: {
        username: values.username,
        email: values.email,
        password: values.password,
      },
    })
      .then((response) => {
        console.log("SIGNUP SUCCESS", response);
      })
      .catch((error) => {
        console.log("SIGNUP FAIL", error);
      });
    // event.preventDefault();
    // const userArr = localStorage.getItem("users")
    //   ? JSON.parse(localStorage.getItem("users"))
    //   : [];

    // console.log("Submitted");
    // console.log(values.email);
    // console.log(values, JSON.stringify(values));
    // for (let i = 0; i < userArr.length; i++) {
    //   if (values.email === userArr[i].email) {
    //     toast.error(
    //       "This email is taken. Try again with another email or login"
    //     );
    //     return;
    //   }
    // }
    // userArr.push(values);
    // localStorage.setItem("users", JSON.stringify(userArr));
    // console.log(JSON.stringify(userArr));
    // actions.resetForm();
    // toast.success("Register successfully");
    // navigate("/login");
    console.log(values);
  };

  const { errors, touched, isSubmitting, handleBlur } = useFormik({
    validationSchema: basicSchema,
  });

  // console.log(errors);

  return (
    <div className=" container">
      <div className="register-container p-5 ">
        <form
          className="px-5 shadow form-group"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <h3 className=" text-center p-5">Sign Up</h3>
          <input
            id="username"
            type="text"
            placeholder="Full name"
            value={username}
            onChange={handleChange("usename")}
            onBlur={handleBlur}
            className={errors.username && touched.username ? "input-error" : ""}
          />
          {errors.username && touched.username && (
            <p className="error">{errors.username}</p>
          )}
          <input
            value={email}
            onChange={handleChange("email")}
            id="email"
            type="email"
            placeholder="Email"
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input-error" : ""}
          />
          <p className="error my-0" id="email"></p>
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}

          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange("password")}
            onBlur={handleBlur}
            className={errors.password && touched.password ? "input-error" : ""}
          />
          {errors.password && touched.password && (
            <p className="error">{errors.password}</p>
          )}

          <input
            id="phone"
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={handleChange("phone")}
            onBlur={handleBlur}
            className={errors.phone && touched.phone ? "input-error" : ""}
          />
          {errors.phone && touched.phone && (
            <p className="error">{errors.phone}</p>
          )}
          <button
            className=" btn btn-dark py-3 w-100 rounded-0 my-2"
            disabled={isSubmitting}
            type="submit"
          >
            Sign up
          </button>
          <p className=" text-center p-5 m-auto">
            Log in ?{" "}
            <Link className=" text-decoration-none" to="/login">
              Click
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Register;
