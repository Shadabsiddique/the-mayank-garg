import styles from './HeroImage.module.scss';
import Image from "next/image";
import heroImage from '../assets/heroImage.svg';


const HeroImage = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.imageOverlay}>
        <Image className={styles.heroImage} src={heroImage} alt="hero image" priority/>
        <div className={styles.statsContainer}>
          <div className={styles.stat}>
            <h2>10L+</h2>
            <p>Students Impacted Globally</p>
          </div>
          <div className={styles.stat}>
            <h2>12L+</h2>
            <p>Learning Minutes Delivered</p>
          </div>
          <div className={styles.stat}>
            <h2>15L+</h2>
            <p>Impressions through Educational Sessions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
