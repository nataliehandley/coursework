// import React, { useContext } from "react";
// import { UserContext } from "../../context/UserProvider";
// import * as firebase from "../../firebase.js";
// import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
// import styles from "./Login.module.scss";

// const Login = () => {
//   const userContext = useContext(UserContext);

//   const handleSubmit = (e) => {
//     e.preventDefault(); //stops default behaviour and refressing page

//     const email = e.target[0].value; //email input
//     const password = e.target[1].value; //password input

// //     signInWithEmailAndPassword(getAuth(firebase.app), email, password)
// //       .then((response) => {
// //         userContext.setUser(response.user.email);
// //         alert("Welcome back to our app");
// //       })
// //       .catch((e) => {
// //         alert("Sorry something went wrong");
// //       });
// //   };
//   return (
//     <form onSubmit={handleSubmit} className={styles.form}>
//       <input placeholder="email..." />
//       <input placeholder="password..." />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;

import React from 'react'

const Login = () => {
  return (
    <div>Login works</div>
  )
}

export default Login