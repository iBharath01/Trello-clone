import React from "react";
import styles from "../../styles/Navbar/Navbar.module.scss";
import { ImTrello } from "react-icons/im";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.header_container} >
        <div>
          <ImTrello color={"white"} />
        </div>
        <div className={styles.header}>Trello</div>
      </div>
     <div className={styles.workspace}>Workspaces</div>
     
    </div>
  );
};

export default Navbar;
