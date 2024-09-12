import { useState, useEffect } from "react";
import styles from "./Slider.module.css";
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const images = ["/images/slide1.jpg", "/images/slide3.jpg"];

const texts = [
  [" High-Quality Health Care", "Experienced Professionals", "24/7 Support"],
  ["Personalized Care Plans", "Compassionate Staff", "Flexible Scheduling"],
];

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedTextIndex, setDisplayedTextIndex] = useState(0); // Manage displayed text
  const [textKey, setTextKey] = useState(0); // Key to force re-render of text animations

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setCurrentIndex(nextIndex);
        setIsTransitioning(false);
      }, 800); // Duration should match CSS for image fade transition
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, nextIndex]);

  const nextSlide = () => {
    if (!isTransitioning) {
      const newIndex = (currentIndex + 1) % images.length;
      setNextIndex(newIndex);
      setDisplayedTextIndex(newIndex); // Update text immediately
      setTextKey((prev) => prev + 1); // Change key to trigger animation
      setIsTransitioning(true); // Start the slide transition
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      const newIndex = (currentIndex - 1 + images.length) % images.length;
      setNextIndex(newIndex);
      setDisplayedTextIndex(newIndex); // Update text immediately
      setTextKey((prev) => prev + 1); // Change key to trigger animation
      setIsTransitioning(true); // Start the slide transition
    }
  };

  return (
    <ParallaxProvider>
      <div style={{ minHeight: "200vh" }}>
        <div className={styles.sliderContainer}>
          <ParallaxBanner
            style={{
              aspectRatio: "16 / 9",
              height: "80vh",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Current slide */}
            <ParallaxBannerLayer
              image={images[currentIndex]}
              speed={-10}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                transition: "opacity 0.8s ease-in-out",
                opacity: isTransitioning ? 0 : 1, // Fade out current slide
                zIndex: isTransitioning ? 1 : 2, // Ensure current slide is behind during transition
              }}
            />

            {/* Next slide for crossfade effect */}
            <ParallaxBannerLayer
              image={images[nextIndex]}
              speed={-10}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                transition: "opacity 0.8s ease-in-out",
                opacity: isTransitioning ? 1 : 0.99, // Fade in next slide, never fully transparent
                zIndex: isTransitioning ? 2 : 1, // Ensure next slide is above during transition
              }}
            />

            {/* Text overlay with animation */}
            <div key={textKey} className={styles.textOverlay}>
              <ul className={styles.bulletPoints}>
                {texts[displayedTextIndex].map((text, index) => (
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
          </ParallaxBanner>
        </div>
        <div style={{ height: "150vh", background: "#f0f0f0" }}>
          Scroll down to see more content below the slider.
        </div>
      </div>
    </ParallaxProvider>
  );
};
