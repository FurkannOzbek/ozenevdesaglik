// components/Footer.js
import React from "react";
import styles from "./Footer.module.css"; // Importing the CSS module for styling
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Importing social media icons

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <img src="/images/logo1.png" alt="Logo" className={styles.footerLogoImage} />
        </div>
        <div className={styles.footerLinks}>
          <a href="#" className={styles.footerLink}>
            Hakkımızda
          </a>
          <a href="#" className={styles.footerLink}>
            Hizmetlerimiz
          </a>
          <a href="#" className={styles.footerLink}>
            İletişim
          </a>
        </div>
        <div className={styles.footerSocial}>
          <a href="#" className={styles.socialIcon}>
            <FaFacebook size={20} /> {/* Facebook icon */}
          </a>
          <a href="#" className={styles.socialIcon}>
            <FaWhatsapp size={20} /> {/* Twitter icon */}
          </a>
          <a href="#" className={styles.socialIcon}>
            <FaInstagram size={20} /> {/* Instagram icon */}
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Özen Evde Sağlık Hizmetleri. All rights reserved.</p>
      </div>
    </footer>
  );
};
