import React, { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./Register.module.scss";
import Display from "../Display/Display";
import app from "../../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const userContext = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault(); //stops default behaviour and refreshing page

    const email = e.target[0].value; //email input
    const password = e.target[1].value; //password input

    signInWithEmailAndPassword(getAuth(app), email, password)
      .then((response) => {
        userContext.setUser(response.user.email);
        alert("Welcome to our app");
      })
      .catch((e) => {
        alert("Sorry something went wrong");
      });
  };

  return (
    <>
      <Display />
      <form onSubmit={handleSubmit} className={styles.form}>
        <input placeholder="email..." />
        <input placeholder="password..." />
        <button type="submit">Register</button>
        <button>
          <Link className={styles.link} to="/">
            Click here to return to home
          </Link>
        </button>
      </form>
    </>
  );
};

export default Register;
