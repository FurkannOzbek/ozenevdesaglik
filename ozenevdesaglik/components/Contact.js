// components/ContactSection.js
"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons
import { FiPhone } from "react-icons/fi"; // Import Phone icon from react-icons
import styles from "./Contact.module.css"; // Import CSS module for styling
import Link from "next/link";

export const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>İletişime Geçin</h2>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FiPhone size={24} className={styles.contactIcon} />
            <span className={styles.contactText}>+90 123 456 78 90</span>
          </div>
          <div className={styles.contactItem}>
            <Link
              href="https://wa.me/901234567890" // Replace with your WhatsApp number
              className={styles.whatsappLink}
              target="_blank" // Open link in new tab
              rel="noopener noreferrer" // Security measure
            >
              <FaWhatsapp size={24} className={styles.contactIcon} />
              <span className={styles.contactText}>WhatsApp ile İletişim</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
