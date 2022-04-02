import React, { createContext, useState } from "react";
import Home from "../components/Home/Home";
import Nav from "../components/Nav/Nav";
import styles from "./UserProvider.module.scss";
import Login from "../components/Login/Login";

export const UserContext = createContext({});

const UserProvider = () => {
  // const currentUser = {
  //   name: "John Doe",
  // };

  const [user, setUser] = useState("");

  const data = {
    user: user,
    setUser: setUser,
  };

  return (
    <div className={styles.userProvider}>
      <UserContext.Provider value={data}>
        <Nav />
        <Home />
        <Login />
      </UserContext.Provider>
    </div>
   
   
  );
};

export default UserProvider;
