import React, { useContext } from "react";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <h1 className={styles.appTitle}>MazinApp</h1>
      <NavMenu />
    </div>
  );
};

export default Nav;
