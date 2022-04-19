import React, { createContext, useState } from "react";
import { Routes } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Routesjsx from "../containers/Routes";

export const UserContext = createContext({});

const UserProvider = () => {
  const [user, setUser] = useState("");

  const data = {
    user: user,
    setUser: setUser,
  };

  return (
    <UserContext.Provider value={data}>
      <Nav />
      <Routesjsx />
    </UserContext.Provider>
  );
};

export default UserProvider;
