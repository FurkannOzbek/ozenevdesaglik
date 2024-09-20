"use client";

import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Slider } from "@/components/Slider";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import FloatingContactButton from "@/components/FloatingContactButton";

const Home = () => {
  const [parallaxStrength, setParallaxStrength] = useState(1600); // Default strength

  useEffect(() => {
    // Function to update parallax strength based on screen width
    const updateParallaxStrength = () => {
      if (window.innerWidth <= 768) {
        // For mobile devices
        setParallaxStrength(200); // Adjust strength for mobile
      } else {
        // For larger screens
        setParallaxStrength(1600); // Adjust strength for desktop
      }
    };

    // Set initial parallax strength on mount
    updateParallaxStrength();

    // Update parallax strength on window resize
    window.addEventListener("resize", updateParallaxStrength);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", updateParallaxStrength);
    };
  }, []);

  return (
    <>
      <Header />
      <Slider />
      <section id="hizmetlerimiz">
        <Services />
      </section>
      <section id="iletisim">
        <Contact />
      </section>
      <Parallax
        bgImage="/images/parallax2.jpg" // Replace with the path to your parallax image
        strength={parallaxStrength} // Use state variable for parallax strength
        className={styles.parallaxContainer} // Optional: Add a class for additional styling
      >
        <div style={{ height: "400px" }}></div> {/* Adjust height to fit your design needs */}
      </Parallax>
      <Footer />
      <FloatingContactButton />
    </>
  );
};

export default Home;
