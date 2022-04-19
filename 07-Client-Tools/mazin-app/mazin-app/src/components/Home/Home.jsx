import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Welcome to Mazin App </h1>
      <div className={styles.homeButton}>
        <button>
          <Link className={styles.link} to="/login">
            Click here to login
          </Link>
        </button>
        <button>
          <Link className={styles.link} to="/register">
            Click here to register
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
