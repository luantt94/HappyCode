import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteSession } from "../Redux/Action/ActionSession";
import MessengerAPI from "../API/MessengerAPI";
import AuthAPI from "../API/AuthAPI";

function LoginLink(props) {
  const roomId = localStorage.getItem("roomId");
  const dispatch = useDispatch();

  const onRedirect = () => {
    const deleteMessenger = async () => {
      try {
        const response = await MessengerAPI.deleteMessenger(roomId);
        console.log("res-->", response);
        if (response === "Delete Messenger success!") {
          localStorage.clear();
          localStorage.setItem("id_temp", "abc999");
        }
      } catch (error) {
        console.log(error);
      }
    };
    const delete_Session = async () => {
      try {
        const response = await AuthAPI.deleteSession();
        console.log("response-->", response);
      } catch (error) {
        console.log(error);
      }
    };
    delete_Session();
    deleteMessenger();

    const action = deleteSession("");
    dispatch(action);
  };

  return (
    <li className="nav-item" onClick={onRedirect}>
      <Link className="nav-link" to="/signin">
        ( Logout )
      </Link>
    </li>
  );
}

export default LoginLink;
