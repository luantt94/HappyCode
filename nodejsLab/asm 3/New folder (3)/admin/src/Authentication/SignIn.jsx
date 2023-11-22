import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Auth.css";
import AuthAPI from "../API/AuthAPI";

function SignIn(props) {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [emailRegex, setEmailRegex] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorAuthorized, setErrorAuthorized] = useState(false);

  const [redirect, setRedirect] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    if (!email) {
      setErrorEmail(true);
      return;
    } else {
      if (!password) {
        setErrorEmail(false);
        setErrorPassword(true);
        return;
      } else {
        setErrorPassword(false);

        if (!validateEmail(email)) {
          setEmailRegex(true);
          return;
        } else {
          setEmailRegex(false);
          const Signin = async () => {
            try {
              const data = {
                email: email,
                password: password,
              };

              const response = await AuthAPI.postSignIn(data);
              console.log("res-->", response);
              if (response.message === "Login successful") {
                if (response.user.role === "client") {
                  setErrorAuthorized(true);
                  return;
                } else {
                  localStorage.setItem("id_user", response.user.userId);
                  localStorage.setItem("name_user", response.user.userName);
                  localStorage.setItem("role", response.user.role);
                  setRedirect(true);
                }
              } else if (response.message === "Wrong email") {
                setErrorEmail(true);
                return;
              } else if (response.message === "Wrong password") {
                setErrorEmail(false);
                setErrorPassword(true);
                return;
              }
            } catch (error) {
              console.log(error);
            }
           
          };
          Signin();
        }
      }
    }
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
          <span className="login100-form-title p-b-33">Sign In</span>

          <div className="d-flex justify-content-center pb-5">
            {emailRegex && (
              <span className="text-danger">* Incorrect Email Format</span>
            )}
            {errorEmail && (
              <span className="text-danger">* Please Check Your Email</span>
            )}
            {errorPassword && (
              <span className="text-danger">* Please Check Your Password</span>
            )}
            {errorAuthorized && (
              <span className="text-danger">
                * You are not authorized to login
              </span>
            )}
          </div>

          <div className="wrap-input100 validate-input">
            <input
              className="input100"
              type="text"
              placeholder="Email"
              value={email}
              onChange={onChangeEmail}
            />
          </div>

          <div className="wrap-input100 rs1 validate-input">
            <input
              className="input100"
              type="password"
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
            />
          </div>

          <div className="container-login100-form-btn m-t-20">
            {redirect && <Navigate to="/" />}
            <button className="login100-form-btn" onClick={onSubmit}>
              Sign in
            </button>
          </div>

          <div className="text-center p-t-45 p-b-4">
            <span className="txt1">Create an account?</span>
            &nbsp;
            <Link to="/signup" className="txt2 hov1">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
