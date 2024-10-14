import React from "react";
import styles from "./Banner.module.scss";

const Banner = ({ title, subtitle }) => {
  return (
    <div className={styles.banner}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};

export default Banner;
