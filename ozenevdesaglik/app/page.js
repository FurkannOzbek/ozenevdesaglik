"use client";

import React from "react";
import { Parallax } from "react-parallax";
import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { Slider } from "@/components/Slider";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat lobortis
        venenatis...
      </p>

      <Parallax
        bgImage="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
        strength={300} // Adjust the strength as necessary
      >
        <div style={{ height: "500px" }}>
          <h1 style={{ textAlign: "center", paddingTop: "200px", color: "#fff" }}>
            Parallax Effect in Action
          </h1>
        </div>
      </Parallax>

      <p>More content...</p>
    </>
  );
};

export default Home;
