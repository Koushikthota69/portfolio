// src/components/Footer.js
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Internal navigation */}
       
        {/* Social links with icons */}
        <div className={styles.socials}>
          <a
            href="mailto:thotakoushik69@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/koushik-thota-1650a3301"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Koushikthota69"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} Koushik Thota. All rights reserved.
      </p>
    </footer>
  );
}
