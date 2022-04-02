import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Routes from "../containers/Routes";
import Nav from "./Nav";

const Home = () => {
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

export default Home;
