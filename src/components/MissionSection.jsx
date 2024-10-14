import React from "react";
import styles from "./MissionSection.module.scss";

const MissionSection = ({ title, subTitle }) => {
  return (
    <section className={styles.mission}>
      <div>{title}</div>
      <p>{subTitle}</p>
    </section>
  );
};

export default MissionSection;
