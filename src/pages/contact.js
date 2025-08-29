// src/pages/contact.js
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <main className={styles.contactContainer}>
      <h1 className={styles.pageTitle}>Contact Me</h1>

      <section className={styles.card}>
        <p><FaEnvelope /> <strong>Email:</strong> 
          <a className={styles.link} href="mailto:thotakoushik69@gmail.com"> thotakoushik69@gmail.com</a>
        </p>
        <p><FaPhone /> <strong>Mobile:</strong> 8688991745</p>
        <p>
          <FaLinkedin /> <strong>LinkedIn:</strong>{' '}
          <a className={styles.link} href="https://www.linkedin.com/in/koushik-thota-1650a3301" target="_blank" rel="noreferrer">
            www.linkedin.com/in/koushik-thota-1650a3301
          </a>
        </p>
        <p>
          <FaGithub /> <strong>GitHub:</strong>{' '}
          <a className={styles.link} href="https://github.com/Koushikthota69" target="_blank" rel="noreferrer">
            github.com/Koushikthota69
          </a>
        </p>
      </section>

      {/* Optional Contact Form */}
      <section className={styles.formSection}>
        <h2>Send Me a Message</h2>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}
