import React, { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import app from "../../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styles from "./Login.module.scss";

const Login = () => {
  const userContext = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault(); //stops default behaviour and refreshing page

    const email = e.target[0].value; //email input
    const password = e.target[1].value; //password input

    signInWithEmailAndPassword(getAuth(app), email, password)
      .then((response) => {
        userContext.setUser(response.user.email);
        alert("Welcome back to our app");
        
      })
      .catch((e) => {
        alert("Sorry something went wrong");
      });
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input placeholder="email..." />
      <input placeholder="password..." />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
