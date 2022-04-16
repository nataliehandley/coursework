import React, { createContext, useState } from "react";
import Home from "../components/Home/Home";
import Nav from "../components/Nav/Nav";
import styles from "./UserProvider.module.scss";

export const UserContext = createContext({});

const UserProvider = () => {
  //   const currentUser = {
  //   name: "John Doe"
  // };

  // const [user, setUser] = useState(currentUser);

  const [user, setUser] = useState("John Doe");

  const data = {
    user: user,
    setUser: setUser,
  };

  return (
    <div className={styles.userProvider}>
      <UserContext.Provider value={data}>
        {/* value = {user} */}
        <Nav />
        <Home />
      </UserContext.Provider>
    </div>
  );
};

export default UserProvider;
