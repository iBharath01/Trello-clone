import React from "react";
import styles from "../../styles/Board/Board.module.scss";
import { IoMdClose } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

export const index = () => {
  return (
    <div className={styles.board_container}>
      <div>
        <div className={styles.board_header}>To Do</div>
      </div>
      <input type="text" placeholder="Enter a title for this card" />
      <div className={styles.buttons}>
        <button>Add Card</button>
        <div>
          <IoMdClose />
        </div>
      </div>
    </div>
  );
};

export default index;
