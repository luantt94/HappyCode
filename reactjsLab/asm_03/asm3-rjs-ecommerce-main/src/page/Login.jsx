import React, { useRef } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const ref = useRef();
  const navigate = useNavigate();

  const onInput = () => {
    ref.current.innerHTML = "";
  };

  const onSubmit = async (values, actions) => {
    const userArr = JSON.parse(localStorage.getItem("users"));
    console.log(values);
    const user = userArr.find(
      (userItem) =>
        userItem.email === values.email && userItem.password === values.password
    );
    if (user) {
      localStorage.setItem("isLogin", JSON.stringify(user));
      toast.success("Login successfully");
      actions.resetForm();
      navigate("/shop");
    } else {
      const el = (ref.current.innerHTML =
        "Email or password incorrect. Try again or click 'Forgot password' to reset it.");

      console.log(el);
    }
  };

  const {
    values,
    errors,
    touched,

    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Please enter Email")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      password: Yup.string().required("Please enter Password"),
    }),
    onSubmit,
  });

  return (
    <div className="container">
      <div className="register-container">
        <div className="pt-5 w-50 m-auto">
          <form
            onSubmit={handleSubmit}
            className=" shadow p-3 mb-5 bg-white rounded form-group"
            action=""
          >
            <h3 className=" text-center p-5">Sign In</h3>
            <div className=" d-flex flex-column px-5">
              <input
                onInput={onInput}
                value={values.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Email"
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
              />
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}
              <input
                onInput={onInput}
                id="password"
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password ? "input-error" : ""
                }
              />
              {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
              )}

              <p ref={ref} className="error"></p>

              <button
                type="submit"
                className="btn rounded-0 py-3 btn-dark text-center w-100"
              >
                SIGN IN
              </button>
              <p className=" p-5 m-auto">
                Creat an account ?{" "}
                <Link className=" text-decoration-none" to="/register">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
