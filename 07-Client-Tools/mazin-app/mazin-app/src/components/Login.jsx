import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>Login works</div>
      <button>
        <Link to="/">Click here to return home</Link>
      </button>
    </>
  );
};

export default Login;
