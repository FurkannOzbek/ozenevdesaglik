// components/Footer.js
"use client";
import React, { useState } from "react";
import styles from "./Footer.module.css"; // Importing the CSS module for styling
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Importing social media icons
import Link from "next/link";

export const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const handleIconClick = (event) => {
    event.preventDefault(); // Prevent default behavior
    const rect = event.target.getBoundingClientRect(); // Get the position of the clicked icon
    setPopupPosition({ x: rect.left + rect.width / 2, y: rect.top - 10 }); // Position popup above the icon
    setShowPopup(true);

    // Hide the popup after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <img src="/images/logo3.png" alt="Logo" className={styles.footerLogoImage} />
        </div>
        <div className={styles.footerLinks}>
          <Link href="/hakkimizda" className={styles.footerLink}>
            Hakkımızda
          </Link>
          <Link href="/#hizmetlerimiz" className={styles.footerLink}>
            Hizmetlerimiz
          </Link>
          <Link href="/#iletisim" className={styles.footerLink}>
            İletişim
          </Link>
        </div>
        <div className={styles.footerSocial}>
          <a href="#" className={styles.socialIcon} onClick={handleIconClick}>
            <FaFacebook size={20} />
          </a>
          <a href="#" className={styles.socialIcon} onClick={handleIconClick}>
            <FaWhatsapp size={20} />
          </a>
          <a href="#" className={styles.socialIcon} onClick={handleIconClick}>
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Özen Evde Sağlık Hizmetleri. All rights reserved.</p>
      </div>
      {showPopup && (
        <div
          className={styles.popup}
          style={{
            position: "fixed",
            top: `${popupPosition.y}px`,
            left: `${popupPosition.x}px`,
            transform: "translate(-50%, -100%)",
            backgroundColor: "#fff",
            padding: "5px 10px",
            borderRadius: "5px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            fontSize: "0.8rem",
            color: "#333",
          }}
        >
          Yakında..
        </div>
      )}
    </footer>
  );
};

export default Footer;
