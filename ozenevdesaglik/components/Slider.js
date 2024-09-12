import { useState, useEffect } from "react";
import styles from "./Slider.module.css";

const images = ["/images/slide1.jpg", "/images/slide3.jpg"];

const texts = [
  ["High-Quality Health Care", "Experienced Professionals", "24/7 Support"],
  ["Personalized Care Plans", "Compassionate Staff", "Flexible Scheduling"],
];

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [key, setKey] = useState(0); // Key to force re-render

  useEffect(() => {
    setFadeIn(true);
    setKey((prevKey) => prevKey + 1); // Update key to force re-render
  }, [currentIndex]);

  const nextSlide = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 300); // Match with the fade-out duration
  };

  const prevSlide = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }, 300); // Match with the fade-out duration
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider} style={{ backgroundImage: `url(${images[currentIndex]})` }}>
        <div
          key={key} // Use key to force re-render
          className={`${styles.textOverlay} ${fadeIn ? styles.fadeIn : styles.fadeOut}`}
        >
          <ul className={styles.bulletPoints}>
            {texts[currentIndex].map((text, index) => (
              <li key={index} style={{ animationDelay: `${index * 0.5}s` }}>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <button className={styles.prev} onClick={prevSlide}>
          &#10094;
        </button>
        <button className={styles.next} onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};
