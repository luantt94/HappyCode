// import React from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { Link, useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();
//   const initialValues = {
//     username: "",
//     email: "",
//     password: "",
//     phone: "",
//   };

//   const validationSchema = Yup.object({
//     username: Yup.string().required("Username is required"),
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     password: Yup.string().required("Password is required"),
//     phone: Yup.string()
//       .required("Phone is required")
//       .matches(/^[0-9]+$/, "Invalid phone number"),
//   });

//   const handleSubmit = (values) => {
//     const newUser = {
//       username: values.username,
//       email: values.email,
//       password: values.password,
//       phone: values.phone,
//     };

//     axios
//       .post("http://localhost:5000/api/auth/register", newUser)
//       .then((response) => {
//         // Xử lý thành công
//         console.log(response.data);
//         toast.success("This is a success toast");
//         navigate("/login");
//       })
//       .catch((error) => {
//         // Xử lý lỗi
//         console.error(error);
//         toast.error("An error occurred. Please try again later");
//       });
//   };

//   return (
//     <div>
//       <h1>Signup</h1>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         <Form>
//           <div>
//             <label htmlFor="username">Username</label>
//             <Field type="text" id="username" name="username" />
//             <ErrorMessage name="username" component="div" className="error" />
//           </div>

//           <div>
//             <label htmlFor="email">Email</label>
//             <Field type="email" id="email" name="email" />
//             <ErrorMessage name="email" component="div" className="error" />
//           </div>

//           <div>
//             <label htmlFor="password">Password</label>
//             <Field type="password" id="password" name="password" />
//             <ErrorMessage name="password" component="div" className="error" />
//           </div>
//           <div>
//             <label htmlFor="phone">Phone</label>
//             <Field type="text" id="phone" name="phone" />
//             <ErrorMessage name="phone" component="div" className="error" />
//           </div>
//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Kiểm tra nếu có input rỗng
    if (!username || !email || !password || !phone) {
      toast.error("Please fill in all the fields");
      return;
    }

    // Kiểm tra mật khẩu có ít nhất 8 ký tự
    if (password.length < 8) {
      toast.error("Password must contain at least 8 characters");
      return;
    }

    // Kiểm tra số điện thoại có đúng 10 chữ số
    if (phone.length !== 10) {
      toast.error("Phone number must contain exactly 10 digits");
      return;
    }

    const newUser = {
      username: username,
      email: email,
      password: password,
      phone: phone,
    };

    // Gửi yêu cầu đăng ký
    axios
      .post("http://localhost:5000/api/auth/register", newUser)
      .then((response) => {
        // Xử lý thành công
        console.log(response.data);
        toast.success("This is a success toast");
        navigate("/login");
      })
      .catch((error) => {
        // Xử lý lỗi
        console.error(error);
        toast.error("An error occurred. Please try again later");
      });
  };

  return (
    <div className="container">
      <div className="register-container p-5">
        <form onSubmit={handleRegister} className="px-5 shadow form-group">
          <div>
            <h3 className="text-center p-5">Sign Up</h3>
            <input
              type="text"
              placeholder="Full name"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone Number"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button
            className="btn btn-dark py-3 w-100 rounded-0 my-2"
            type="submit"
          >
            Sign up
          </button>
          <p className="text-center p-5 m-auto">
            Log in?
            <Link className="text-decoration-none" to="/login">
              Click
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
