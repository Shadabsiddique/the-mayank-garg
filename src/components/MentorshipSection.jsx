import React from 'react';
import styles from './MentorshipSection.module.scss';
import Image from "next/image";


const MentorshipSection = ({image, subTitle}) => {
  return (
    <section className={styles.mentorship}>
      <div className={styles.mentorshipImage}>
        <Image className={styles.mentorshipMainImage} src={image} alt="Mentorship" priority/>
      </div>
      <div className={styles.mentorshipText}>
        <p>{subTitle}</p>
      </div>
    </section>
  );
};

export default MentorshipSection;
