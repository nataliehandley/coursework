import React, { useContext } from "react";
import styles from "./NavMenu.module.scss";
import { UserContext } from "../../context/UserProvider";

const NavMenu = () => {
  const data = useContext(UserContext);
  return (
    <div className={styles.navMenu}>
      <h1>{data.name}</h1>
      <select></select>
    </div>
  );
};

export default NavMenu;
