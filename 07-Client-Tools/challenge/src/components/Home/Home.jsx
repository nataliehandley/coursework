import React, { useContext } from "react";
import styles from "./Home.module.scss";
import { UserContext } from "../../context/UserProvider";

const Home = () => {
  const userContext = useContext(UserContext);

  return (
    <div className={styles.home}>
      <h1 className={styles.homeTitle}>
        Welcome
        <br /> {userContext.user}
      </h1>
    </div>
  );
};

export default Home;
