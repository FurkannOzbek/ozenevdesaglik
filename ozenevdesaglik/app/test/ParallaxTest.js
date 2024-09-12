// components/FullScreenParallaxImage.js
"use client";

import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import React from "react";
import slide1 from "../../public/images/slide1.jpg"; // Correct image import

const ParallaxTest = () => {
  return (
    <ParallaxProvider>
      {" "}
      {/* Ensure ParallaxProvider wraps the component */}
      <div style={{ height: "200vh" }}>
        {" "}
        {/* Ensuring enough height for scrolling */}
        {/* ParallaxBanner container with appropriate height and aspect ratio */}
        <ParallaxBanner style={{ aspectRatio: "4 / 2", height: "100vh", overflow: "hidden" }}>
          <ParallaxBannerLayer
            image={slide1.src} // Use .src to correctly reference the image path
            speed={20} // Adjust speed for parallax movement
            style={{
              height: "120%", // Adjust height to control vertical size
              width: "110%", // Adjust width to control horizontal size
              objectFit: "cover", // Ensures the image scales properly within the container
              objectPosition: "center", // Center the image in the container
              position: "absolute", // Proper positioning for parallax movement
              top: 0, // Starts the image at the top of the container
              left: "-5%", // Adjust to center or position the image
              transform: "translateY(-10%)", // Fine-tune vertical positioning
            }}
          />
        </ParallaxBanner>
        {/* Additional content to enable scrolling */}
        <div style={{ height: "150vh", background: "#f0f0f0" }}>
          Scroll down to see the parallax effect in action.
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxTest;
