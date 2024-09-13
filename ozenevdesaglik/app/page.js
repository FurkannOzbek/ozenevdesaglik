"use client";

import React from "react";
import { Parallax } from "react-parallax";
import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Slider } from "@/components/Slider";
import { Services } from "@/components/Services";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Services />
      <Parallax
        bgImage="/images/parallax2.jpg" // Replace with the path to your parallax image
        strength={1600} // Adjust the parallax strength (depth effect)
        className={styles.parallaxContainer} // Optional: Add a class for additional styling
      >
        <div style={{ height: "400px" }}></div> {/* Adjust height to fit your design needs */}
      </Parallax>
      <Footer />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat lobortis
        venenatis...
      </p>
    </>
  );
};

export default Home;
