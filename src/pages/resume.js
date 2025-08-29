import React from "react";
import styles from "../styles/Resume.module.css";

export default function Resume() {
  const certificates = [
    {
      title: "Advanced Java",
      description: "Completed Advanced Java course covering OOP, Collections, Streams, and more.",
      link: "/files/javaCertificate.pdf"
    },
    {
      title: "Machine Learning & Deep Learning",
      description: "Completed ML & DL courses, including supervised and unsupervised learning techniques.",
      link: "/files/Sap_certificate.pdf"
    },
    {
      title: "Python for Data Science",
      description: "Python, Pandas, NumPy, data visualization, and ML basics covered in this course.",
      link: "/files/pythonCertificate.pdf"
    }
  ];

  return (
    <div className={styles.resumeContainer}>
      <h1 className={styles.pageTitle}>My Resume & Certifications</h1>

      {/* Resume Section */}
      <section className={styles.card}>
        <h2>Resume</h2>
        <p>
          Download my resume:
          <a
            href="/files/Updated_Resume_Koushik_Thota.docx"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewBtn}
          >
            Download Resume
          </a>
        </p>
      </section>

      {/* Certifications */}
      <section className={styles.certificatesGrid}>
        {certificates.map((cert, index) => (
          <div key={index} className={styles.card}>
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className={styles.viewBtn}>
              View Certificate
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
