import Image from 'next/image';
import styles from './AboutImageText.module.scss';
import AboutImage from '../assets/AboutImage.svg';

const AboutImageText = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2>Who Am I?</h2>
          <p>
            I’m Mayank Garg, an educator, mentor, and motivational speaker dedicated to helping students achieve their academic and personal best. With a B.Tech in Electronics Instrumentation and Control from YMCA, Faridabad, and over a decade of experience in the education industry, I currently serve as the Director and Chief Mentor at TIME UG and CLAT Prep Gurgaon.
          </p>
          <p>
            Throughout my career, I have guided thousands of students across India, helping them secure top ranks in competitive exams like CLAT and AILET. My passion for education goes beyond exam preparation— I aim to inspire, empower, and nurture the leaders of tomorrow.
          </p>
          <button className={styles.ctaButton}>Get In Touch</button>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={AboutImage}
            alt="Mayank Garg speaking at an event"
            layout="responsive"
            width={500}
            height={300}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutImageText;
