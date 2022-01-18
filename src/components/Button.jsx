import React from "react";
import styles from "./Gallery.module.css";

const Button = ({ loadMore }) => {
  return (
    <button onClick={loadMore} className={styles.Button}>
      {" "}
      Load more
    </button>
  );
};

export default Button;
