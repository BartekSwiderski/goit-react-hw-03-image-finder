import React from "react";
import styles from "./ImageGallery.module.css";

const Button = (props) => {
  const { className, onClick } = props;

  const newStyle = className ? className : styles.Button;

  return (
    <button type="submit" className={newStyle} onClick={onClick}>
      <span>{props.children}</span>
    </button>
  );
};

export default Button;
