import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    const userArr = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    console.log("Submitted");
    console.log(values.email);
    console.log(values, JSON.stringify(values));
    for (let i = 0; i < userArr.length; i++) {
      if (values.email === userArr[i].email) {
        toast.error(
          "This email is taken. Try again with another email or login"
        );
        return;
      }
    }
    userArr.push(values);
    localStorage.setItem("users", JSON.stringify(userArr));
    console.log(JSON.stringify(userArr));
    actions.resetForm();
    toast.success("Register successfully");
    navigate("/login");
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      password: "",
      phone: "",
    },
    validationSchema: basicSchema,
    onSubmit,
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
            id="fullName"
            type="text"
            placeholder="Full name"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.fullName && touched.fullName ? "input-error" : ""}
          />
          {errors.fullName && touched.fullName && (
            <p className="error">{errors.fullName}</p>
          )}
          <input
            value={values.email}
            onChange={handleChange}
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
            value={values.password}
            onChange={handleChange}
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
            value={values.phone}
            onChange={handleChange}
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
