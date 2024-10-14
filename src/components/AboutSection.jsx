import React from "react";
import HeroImage from "./HeroImage";
import WelcomeText from "./WelcomeText";
import ExpertiseGrid from "./ExpertiseGrid";
import GridImage from "../assets/GridImage.svg";
import MissionSection from "./MissionSection";
import MentorshipSection from "./MentorshipSection";
import missionImage from "../assets/mission.svg";
import mentorImage from "../assets/mentor.svg";
import Development from "../assets/Development.svg";
import Career from "../assets/Career.svg";
import Coaching from "../assets/Coaching.svg";
import Leadership from "../assets/Leadership.svg";
import PublicSpeaking from "../assets/PublicSpeaking.svg";


const AboutSection = () => {
  const expertiseItems = [
    { image: GridImage, title: "Academic Mentorship" },
    { image: Career, title: "Career Counseling" },
    { image: Development, title: "Personal Development" },
    { image: Coaching, title: "Career Development Coaching" },
    { image: Leadership, title: "Leadership Development" },
    { image: PublicSpeaking, title: "Public Speaking" },
  ];
  return (
    <div>
      <HeroImage />
      <WelcomeText
        textTitle="Welcome, and thank you for exploring my journey."
        textBody="I’m Mayank Garg, and my passion lies in unlocking the potential within
        every student I mentor. With a B.Tech in Electronics Instrumentation and
        Control from YMCA, Faridabad, I built a foundation in analytical
        thinking and problem-solving that has driven my career and shaped my
        approach to education."
        textSubtitle="For me, mentorship is more than just guidance; it’s about inspiring
        transformation, fostering growth, and empowering individuals to reach
        their highest potential."
        textFooter="Let’s make the journey count."
        image={missionImage}
      />
      <MissionSection
        title={"My Mission"}
        subTitle={
          " My mission is to make a profound and positive impact on the lives of students through education and mentorship. I am dedicated to guiding each student to unlock their full potential, whether it's achieving top ranks in competitive exams or discovering their true passion and career path. Education is not just my profession; it's my calling. I believe that with the right support, every student has the potential to achieve greatness. My commitment is to provide the guidance, resources, and inspiration needed to turn dreams into reality, one student at a time."
        }
      />
      <MentorshipSection
        image={mentorImage}
        subTitle={
          "Mentorship, for me, is not just about imparting knowledge; it is about empowering students to realize their full potential. I believe that every student is unique, with their own set of strengths, weaknesses, and aspirations. My approach to mentorship is highly personalized, focusing on understanding each student's individual needs and tailoring my guidance accordingly. Whether it's academic mentorship, career counseling, or personal development, my goal is to provide the support and encouragement that students need to navigate their educational journey successfully."
        }
      />
      <ExpertiseGrid items={expertiseItems} />
    </div>
  );
};

export default AboutSection;
