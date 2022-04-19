import React, { useContext } from "react";
import styles from "./NavMenu.module.scss";
import { UserContext } from "../../context/UserProvider";
import { getAuth,  signOut } from "firebase/auth";

const NavMenu = () => {
  const userContext = useContext(UserContext);

  const random = getAuth();

  const handleSignOut = (e) => {
    signOut(random)
      .then(() => {
        alert("You have successfully signed out");
        window.location.reload();
      })
      .catch((error) => {
        alert("An error as occured");
      });
  };

  return (
    <div className={styles.navMenu}>
      <h1 className={styles.user}>{userContext.user}</h1>
      <button onClick={handleSignOut} className={styles.navButton}>
        Sign Out
      </button>
    </div>
  );
};

export default NavMenu;
