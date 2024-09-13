// components/Navbar.js
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";
import logo1 from "../public/images/logo1.png";
// Import the Image component from Next.js if you want to use it
// import Image from "next/image";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Add the logo here */}
        <Link href="/" className={styles.navLogo}>
          {/* Use an <img> tag or the <Image> component from Next.js */}
          <img src="/images/logo1.png" alt="Logo" className={styles.logo} />
        </Link>
        <div className={`${styles.navMenu} ${isOpen ? "active" : ""}`}>
          <Link href="/" className={styles.navItem}>
            Anasayfa
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
