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
    </>
  );
};

export default Home;
