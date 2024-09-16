import { useState, useEffect, useRef } from "react";
import styles from "./Slider.module.css";
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const images = [
  "/images/slide22.jpg",
  "/images/slide4.jpeg",
  "/images/slide5.jpeg",
  "/images/slide6.jpeg",
  "/images/slide7.jpeg",
];

const texts = [
  [
    "Evde Serum",
    "Pansuman",
    "Enjeksiyon",
    "Evde Doktor Hizmeti",
    "Sonda değişimi",
    "Akupunktur",
    "Hacamat",
    "Sülük",
    "Evde Hasta Bakım Hizmeti",
  ],
  [
    "Danışman Doktorlarımız",
    "Temizlik ve Sterilizasyon Anlayışımız",
    "7/24 Hizmet",
    "Ekip Yapımız ve İş Anlayışımız",
  ],
];

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedTextIndex, setDisplayedTextIndex] = useState(0); // Manage displayed text
  const [textKey, setTextKey] = useState(0); // Key to force re-render of text animations
  const parallaxRef = useRef(); // Reference to ParallaxProvider

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setCurrentIndex(nextIndex);
        setIsTransitioning(false);

        // Reinitialize or refresh parallax positions after slide change
        if (parallaxRef.current) {
          parallaxRef.current.update(); // Assuming 'update' is a method available to refresh parallax calculations
        }
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
    <ParallaxProvider ref={parallaxRef}>
      <div>
        <div className={styles.sliderContainer}>
          <ParallaxBanner
            style={{
              aspectRatio: "4 / 3",
              height: "85vh",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Current slide */}
            <ParallaxBannerLayer
              image={images[currentIndex]}
              speed={-10}
              className={styles.ParallaxBannerLayer1}
              style={{
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain", // Change to contain to fit images within the container
                objectPosition: "center top", // Center the image within the view
                transition: "opacity 0.8s ease-in-out",
                opacity: isTransitioning ? 0 : 1,
                zIndex: isTransitioning ? 1 : 2,
              }}
            />

            {/* Next slide for crossfade effect */}
            <ParallaxBannerLayer
              image={images[nextIndex]}
              speed={-10}
              className={styles.ParallaxBannerLayer2}
              style={{
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain", // Ensure this matches the other layer
                objectPosition: "center top",
                transition: "opacity 0.8s ease-in-out",
              }}
            />

            {/* Text overlay with animation */}
            <div key={textKey} className={styles.textOverlay}>
              <ul
                className={`${styles.bulletPoints} ${
                  displayedTextIndex === 0 ? styles.textStyle0 : styles.textStyle1
                }`}
              >
                {Array.isArray(texts[displayedTextIndex]) &&
                  texts[displayedTextIndex].map(
                    (text, index) =>
                      text ? ( // Check if the text is defined
                        <li key={index} style={{ animationDelay: `${index * 0.5}s` }}>
                          {text}
                        </li>
                      ) : null // Render nothing if the text is undefined
                  )}
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
      </div>
    </ParallaxProvider>
  );
};
