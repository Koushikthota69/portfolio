// src/components/Navbar.js
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          MyPortfolio
        </Link>
      </div>

      {/* Hamburger (only shows on mobile) */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </div>

      {/* Nav links */}
      <ul className={`${styles.navList} ${menuOpen ? styles.showMenu : ""}`}>
        <li>
          <Link href="/" className={styles.link} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.link} onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className={styles.link} onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/resume" className={styles.link} onClick={() => setMenuOpen(false)}>
            Resume And Certification
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.link} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
