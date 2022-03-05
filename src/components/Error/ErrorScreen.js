import React from "react";
import { Link } from "react-router-dom";
import errorImg from '../../assets/error.svg'
import "./ErrorScreen.css";

const ErrorScreen = () => {
  return (
    <div className="errorScreen">
      <img src={errorImg} />
      <h1 >Usuario ya elegido :(</h1>
      <Link to="/">
        <button>Volver</button>
      </Link>
    </div>
  );
};

export default ErrorScreen;
