import React from "react";
import FormContainer from "../components/FormContainer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loader from "../components/Loader";
import { useLoginMutation } from "../redux/usersApiSlice";
import { setCredentials } from "../slices/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);
  console.log("userInfo");
  console.log(userInfo);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="email" className="my-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password" className="my-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary" disabled={isLoading}>
          Sign In
        </Button>
        {isLoading && <Loader />}
      </Form>
      <Row className="py-3">
        <Col>
          New Customer?
          <Link
            to={redirect ? `/register?redirect=${redirect}` : "/register"}
          />
        </Col>
      </Row>
    </FormContainer>
    //   <div className="container">
    //     <div className="register-container">
    //       <div className="pt-5 w-50 m-auto">
    //         <form
    //           onSubmit={handleLogin}
    //           className=" shadow p-3 mb-5 bg-white rounded form-group"
    //         >
    //           <h3 className=" text-center p-5">Sign In</h3>
    //           <div className=" d-flex flex-column px-5">
    //             <input
    //               type="text"
    //               id="email"
    //               value={email}
    //               onChange={handleUsernameChange}
    //               placeholder="Email"
    //             />
    //           </div>
    //           <div className=" d-flex flex-column px-5">
    //             <input
    //               type="password"
    //               id="password"
    //               value={password}
    //               onChange={handlePasswordChange}
    //               placeholder="Password"
    //             />
    //           </div>
    //           <div>
    //             <button
    //               className="btn rounded-0 py-3 btn-dark text-center w-100"
    //               type="submit"
    //             >
    //               SIGN IN
    //             </button>
    //             <p className=" p-5 m-auto">
    //               Creat an account
    //               <Link className=" text-decoration-none" to="/register">
    //                 Sign up
    //               </Link>
    //             </p>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default Login;
