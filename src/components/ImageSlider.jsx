"use client"; // Add this directive to make the component a Client Component

import React, { useState, useEffect } from "react";
import styles from "./ImageSlider.module.scss";
import Image from "next/image";

import MayankImg1 from "../assets/MayankImg1.svg";
import MayankImg2 from "../assets/MayankImg2.svg";
import MayankImg3 from "../assets/MayankImg3.svg";
import MayankImg4 from "../assets/MayankImg4.svg";
import MayankImg5 from "../assets/MayankImg5.svg";
import MayankImg6 from "../assets/MayankImg6.svg";
import MayankImg7 from "../assets/MayankImg7.svg";
import MayankImg8 from "../assets/MayankImg8.svg";

const ImageSlider = () => {
  const images = [
    MayankImg1,
    MayankImg2,
    MayankImg3,
    MayankImg4,
    MayankImg5,
    MayankImg6,
    MayankImg7,
    MayankImg8
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(images.length - 1);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const handlePrevSlide = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentIndex
                ? styles.active
                : index === prevIndex
                ? styles.previous
                : ""
            }`}
          >
            {index === currentIndex && (
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                objectFit="contain" // Ensure no cropping
                priority
              />
            )}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button onClick={handlePrevSlide} className={styles.prev}>
        &#10094;
      </button>
      <button onClick={handleNextSlide} className={styles.next}>
        &#10095;
      </button>

      {/* Dots Navigation */}
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => {
              setPrevIndex(currentIndex);
              setCurrentIndex(index);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;


