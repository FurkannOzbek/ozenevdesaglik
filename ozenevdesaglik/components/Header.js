// components/Navbar.js
import Link from "next/link";
import { useState, useRef } from "react";
import styles from "./Header.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const targetRef = useRef(null);

  const scrollToSection = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navLogo}>
          <img src="/images/logo1.png" alt="Logo" className={styles.logo} />
        </Link>
        <div className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
          <Link href="/" className={styles.navItem}>
            Anasayfa
          </Link>
          <Link href="/about" className={styles.navItem}>
            Hakkımızda
          </Link>
          <Link href="" onClick={scrollToSection} className={styles.navItem}>
            Hizmetlerimiz
          </Link>
          <Link href="/contact" className={styles.navItem}>
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
