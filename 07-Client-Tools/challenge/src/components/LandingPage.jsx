import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import Login from "./Login/Login";
import UserProvider from "../context/UserProvider";

const LandingPage = () => {
  return (
    <div>
      <button>
        <Link to="/login">Click here to login</Link>
      </button>
      <button>
        <Link to="/register">Click here to register</Link>
      </button>
    </div>
  );
};

export default LandingPage;
