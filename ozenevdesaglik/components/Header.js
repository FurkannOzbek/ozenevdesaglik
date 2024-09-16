// components/Navbar.js
import Link from "next/link";
import { useState, useRef } from "react";
import styles from "./Header.module.css";
import logo1 from "../public/images/logo1.png"; // Ensure the path to your image is correct
// Uncomment if needed: import Image from "next/image";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  const targetRef = useRef(null);

  const scrollToSection = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    closeMenu(); // Close the menu after scrolling
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navLogo}>
          <img src="/images/logo3.png" alt="Logo" className={styles.logo} />
        </Link>
        <div className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
          <Link href="/" className={styles.navItem} onClick={closeMenu}>
            Anasayfa
          </Link>
          <Link href="/hakkimizda" className={styles.navItem} onClick={closeMenu}>
            Hakkımızda
          </Link>
          <Link href="/#hizmetlerimiz" className={styles.navItem} onClick={closeMenu}>
            Hizmetlerimiz
          </Link>
          <Link href="/#iletisim" className={styles.navItem} onClick={closeMenu}>
            İletişim
          </Link>
        </div>

        <button className={styles.navToggle} onClick={toggleMenu}>
          <span className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}></span>
        </button>
      </div>
    </nav>
  );
};
