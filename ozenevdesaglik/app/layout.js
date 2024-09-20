// app/layout.js
"use client";

import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { ParallaxProvider } from "react-scroll-parallax";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <head>
        <title> Mediport Sağlık Hizmetleri</title>
        <meta
          name="description"
          content="Evinizde sağlık hizmeti hiç olmadığı kadar kolay"
          key="desc"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
      <GoogleAnalytics gaId="AW-16707157786" />
    </html>
  );
}
