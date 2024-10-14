import React from "react";
import Card from "./Card";
import styles from "./Connect.module.scss";
import Banner from "./Banner";
import cardData from '../data/cardData';


const Connect = () => {
  return (
    <div className={styles["connect-container"]}>
      {/* Banner Section */}
      <div className={styles["banner-wrapper"]}>
        <Banner
          title="Get in Touch"
          subtitle="We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to share your feedback, our team is here to help."
        />
      </div>

      {/* Card Groups */}
      <div className={styles["card-group"]}>
      {cardData?.map(({ icon, title, contactInfo, description }, index) => (
        <Card
          key={index}
          icon={icon}
          title={title}
          contactInfo={contactInfo}
          description={description}
        />
      ))}
      </div>
    </div>
  );
};

export default Connect;
