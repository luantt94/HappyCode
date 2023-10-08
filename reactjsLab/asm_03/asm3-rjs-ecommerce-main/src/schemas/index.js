import * as yup from "yup";

const phoneRules = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Please enter Full name")
    .min(4, "Must be 4 characters or more"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter Email"),
  phone: yup
    .string()
    .matches(phoneRules, { message: "Please input a valid phone number" })
    .required("Please enter Phone number"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Please enter Password"),
});
