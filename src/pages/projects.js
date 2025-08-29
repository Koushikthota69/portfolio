import { useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/projects.module.css';

export default function Projects() {
  useEffect(() => {
    const els = document.querySelectorAll(`.${styles.reveal}`);
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add(styles.show);
      });
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const projects = [
    {
      title: "Online Voting System",
      description: "A secure, role-based voting platform with voter verification and results dashboard. Admin manages candidates and elections; users vote with authentication.",
      tech: "Node.js • Express • MySQL"
    },
    {
      title: "Gender Prediction (Male/Female) ML",
      description: "Supervised classification that predicts gender from features like voice pitch. Built, cleaned data, trained logistic regression; achieved strong baseline accuracy.",
      tech: "Python • scikit-learn • Pandas"
    },
    {
      title: "Employee Management System",
      description: "Java application to manage employees with CRUD, sorting, and search utilities. Emphasis on collections, layered design, and clean data handling.",
      tech: "Java • JDBC / Collections • (MySQL optional)"
    }
  ];

  return (
    <main className={styles.projectsContainer}>
      <h1 className={`${styles.pageTitle} ${styles.reveal}`}>Projects</h1>

      <section className={`${styles.projectsGrid} ${styles.reveal}`}>
        {projects.map((proj, i) => (
          <article key={i} className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{proj.title}</h3>
              <p>{proj.description}</p>
              <p className={styles.tech}>{proj.tech}</p>
            </div>
          </article>
        ))}
      </section>

      <div className={styles.reveal} style={{ marginTop: '22px' }}>
        <Link className={styles.btn} href="https://github.com/Koushikthota69" target="_blank" rel="noreferrer">
          Visit my GitHub
        </Link>
      </div>
    </main>
  );
}
