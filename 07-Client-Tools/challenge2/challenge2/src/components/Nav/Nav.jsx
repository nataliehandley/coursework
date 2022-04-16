import React, { useContext } from "react";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./Nav.module.scss";
import { ThemeContext } from "../../context/ThemeProvider";

const Nav = () => {
  const themeContext = useContext(ThemeContext);

  return (
   
      <div className={themeContext.isDarkTheme ? "dark" : "light"}>
      <div className={styles.nav}>
        <h1 className={styles.appTitle}>MazinApp</h1>
        <button onClick={themeContext.toggleTheme}>Change Theme </button>
        <NavMenu />
      </div>
    </div>
  );
};

export default Nav;
