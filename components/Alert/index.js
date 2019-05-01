import React from "react";
import styles from "./Alert.module.sass";

const Alert = ({show, message = 'error'}) => {
  if (show)
    return <span className={styles["alert"]}>{message}</span>;
  else 
    return null;
}

export default Alert;
