import React, { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import styles from "./Display.module.scss";

const Display = () => {
  const userContext = useContext(UserContext);

  return (
    <div className={styles.display}>
      <h1 className={styles.displayTitle}>
        Welcome
        <br /> {userContext.user}
      </h1>
    </div>
  );
};

export default Display;
