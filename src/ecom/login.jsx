
import React from "react";
import Button from "react-bootstrap/Button";
import { FaSignInAlt } from "react-icons/fa";
import './login.css'

const Login = () => {
  return (
    <Button className="login-button" variant="">
      <FaSignInAlt className="login-icon" />
      <span className="login-text">Log In</span>
    </Button>
  );
};

export default Login;
