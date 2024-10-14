import React from 'react';
import styles from './ExpertiseGrid.module.scss';
import Image from "next/image";


const ExpertiseGrid = ({ items }) => {
  return (
    <section className={styles.expertiseSection}>
      <h2 className={styles.title}>My Expertise</h2>
      <div className={styles.gridContainer}>
        {items.map((item, index) => (
          <div key={index} className={styles.gridItem}>
            <Image src={item.image} alt={item.title} className={styles.image} priority/>
            <div className={styles.caption}>{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseGrid;
