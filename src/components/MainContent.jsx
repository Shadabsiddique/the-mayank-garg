import React from "react";
import styles from "./MainContent.module.scss";
import ExpertiseGrid from "../components/ExpertiseGrid";
import Development from "../assets/Development.svg";
import Career from "../assets/Career.svg";
import Coaching from "../assets/Coaching.svg";
import Leadership from "../assets/Leadership.svg";
import PublicSpeaking from "../assets/PublicSpeaking.svg";
import GridImage from "../assets/GridImage.svg";
import HomeHeroImage from "../assets/HomeHeroImage.svg";
import mentorImage from "../assets/mentor.svg";
import Image from "next/image";
import MentorshipSection from "../components/MentorshipSection";
import AboutImageText from "../components/AboutImageText";
import ImageSlider from "./ImageSlider";

const MainContent = () => {
  const expertiseItems = [
    { image: GridImage, title: "Academic Mentorship" },
    { image: Career, title: "Career Counseling" },
    { image: Development, title: "Personal Development" },
    { image: Coaching, title: "Career Development Coaching" },
    { image: Leadership, title: "Leadership Development" },
    { image: PublicSpeaking, title: "Public Speaking" },
  ];
  return (
    <div className={styles.mainContent}>
      <div className="main-hero-image">
        <Image
          src={HomeHeroImage}
          alt="Hero Image"
          layout="responsive" // This is crucial for responsiveness
          width={1200} // Set a base width
          height={600} // Set a base height, adjust according to your design
          priority
        />
      </div>
      <MentorshipSection
        image={mentorImage}
        subTitle={
          "Mentorship, for me, is not just about imparting knowledge; it is about empowering students to realize their full potential. I believe that every student is unique, with their own set of strengths, weaknesses, and aspirations. My approach to mentorship is highly personalized, focusing on understanding each student's individual needs and tailoring my guidance accordingly. Whether it's academic mentorship, career counseling, or personal development, my goal is to provide the support and encouragement that students need to navigate their educational journey successfully."
        }
      />
      <ExpertiseGrid items={expertiseItems} />
      <AboutImageText />
      <ImageSlider />
    </div>
  );
};

export default MainContent;
