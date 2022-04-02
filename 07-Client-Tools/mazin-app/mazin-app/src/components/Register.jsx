import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div>Register works</div>
      <button>
        <Link to="/">Click here to return home</Link>
      </button>
    </>
  );
};

export default Register;
