// components/Navbar.js
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={`${styles.navMenu} ${isOpen ? "active" : ""}`}>
          <Link href="/" className={styles.navItem}>
            Anasayfag
          </Link>
          <Link href="/about" className={styles.navItem}>
            Hakkımızda
          </Link>
          <Link href="/services" className={styles.navItem}>
            Hizmetlerimiz
          </Link>
          <Link href="/contact" className={styles.navItem}>
            İletişim
          </Link>
        </div>

        <button className={styles.navToggle} onClick={toggleMenu}>
          <span className={styles.hamburger}></span>
        </button>
      </div>
    </nav>
  );
};
