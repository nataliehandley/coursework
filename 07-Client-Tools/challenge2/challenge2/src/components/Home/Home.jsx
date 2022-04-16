import React, { useContext } from "react";
import styles from "./Home.module.scss";
import { UserContext } from "../../context/UserProvider";
import { ThemeContext } from "../../context/ThemeProvider";

const Home = () => {
  const userContext = useContext(UserContext);
  const themeContext = useContext(ThemeContext);

  return (
    <div className={themeContext.isDarkTheme ? "dark" : "light"}>
      <div className={styles.home}>
        <h1 className={styles.homeTitle}>
          Welcome home
          <br /> {userContext.user}
        </h1>
      </div>
    </div>
  );
};

export default Home;
