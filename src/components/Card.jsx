import React from "react";
import styles from "./Card.module.scss";
import Image from "next/image";

const Card = ({ icon, title, description, contactInfo }) => {
  return (
    <div className={styles.card}>
      {icon && <Image src={icon} alt={title} className={styles.icon} width={40} height={40} priority />}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.contactInfo}>{contactInfo}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;
