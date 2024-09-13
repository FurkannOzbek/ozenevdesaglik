"use client";

import React from "react";
import { Parallax } from "react-parallax";
import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { Slider } from "@/components/Slider";
import { Services } from "@/components/Services";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Services />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat lobortis
        venenatis...
      </p>
    </>
  );
};

export default Home;
