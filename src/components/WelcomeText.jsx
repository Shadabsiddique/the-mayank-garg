import React from "react";
import styles from "./WelcomeText.module.scss";
import Image from "next/image";



const WelcomeText = ({ textTitle, textBody, textSubtitle, textFooter , image}) => {
  return (
    <section className={styles.introduction}>
      <div className={styles.introText}>
        <div className={styles.titleText}>{textTitle}</div>
        <p className={styles.textBody}>{textBody}</p>
        <p className={styles.textSubtitle}>{textSubtitle}</p>
        <p className={styles.textFooter}>{textFooter}</p>
      </div>
      <div className={styles.wordCloud}>
        <Image className={styles.wordCloudImage} src={image} alt="Career Development Word Cloud" priority/>
      </div>
    </section>
  );
};

export default WelcomeText;
