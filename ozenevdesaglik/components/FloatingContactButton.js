// FloatingContactButton.js
import React, { useState } from "react";
import styles from "./FloatingContactButton.module.css"; // CSS module for styling
import { FaPhoneAlt, FaWhatsapp, FaComments, FaTimes, FaInstagram } from "react-icons/fa"; // Import Instagram icon

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContactOptions = () => {
    setIsOpen((prev) => !prev); // Toggle state
  };

  return (
    <div className={styles.floatingButtonContainer}>
      {/* Main animated button */}
      <button
        className={`${styles.mainButton} ${isOpen ? styles.open : styles.close}`}
        onClick={toggleContactOptions}
      >
        <span className={styles.iconContainer}>
          {isOpen ? (
            <FaTimes className={`${styles.icon} ${styles.closeIcon}`} />
          ) : (
            <FaComments className={`${styles.icon} ${styles.chatIcon}`} />
          )}
        </span>
      </button>

      {/* Independent phone bubble */}
      <a
        href="tel:+905422053343"
        className={`${styles.bubble} ${isOpen ? styles.expand : styles.collapse} ${
          styles.phoneBubble
        }`}
      >
        <FaPhoneAlt />
      </a>

      {/* Independent WhatsApp bubble */}
      <a
        href="https://wa.me/905422053343"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.bubble} ${isOpen ? styles.expand : styles.collapse} ${
          styles.whatsappBubble
        }`}
      >
        <FaWhatsapp />
      </a>

      {/* Independent Instagram bubble */}
      <a
        href="https://www.instagram.com/mediportsaglik"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.bubble} ${isOpen ? styles.expand : styles.collapse} ${
          styles.instagramBubble
        }`}
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default FloatingContactButton;
