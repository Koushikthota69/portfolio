import { useEffect, useRef, useMemo } from "react";
import styles from "../styles/about.module.css";

export default function About() {
  const education = [
    { level: "10th", school: "Sri Vishwa Bharathi High School, Warangal", gpa: "GPA: 10" },
    { level: "Intermediate", school: "Ramappa Junior College, Hanmakonda", gpa: "GPA: 8.2" },
    { level: "B.Tech", school: "Balaji Institute of Technology and Science, Warangal", gpa: "CGPA: 8.6" },
  ];

  // ✅ useMemo so skills doesn’t get recreated on each render
  const skills = useMemo(() => [
    { name: "Java", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "MySQL", level: 75 },
    { name: "HTML/CSS/JS", level: 95 },
    { name: "Machine Learning", level: 70 },
  ], []);

  const hobbies = ["Cricket", "Reading", "Coding"];

  const numberRefs = useRef([]);
  const circleRefs = useRef([]);

  useEffect(() => {
    if (!Array.isArray(skills)) return;

    const radius = 15.9155; // Based on SVG path circle
    const circumference = 2 * Math.PI * radius;

    const animationIds = [];

    skills.forEach((skill, idx) => {
      const circle = circleRefs.current[idx];
      const text = numberRefs.current[idx];
      if (!circle || !text) return;

      circle.style.strokeDasharray = circumference;
      circle.style.strokeDashoffset = circumference;

      let count = 0;
      const target = skill.level;

      const step = () => {
        count++;
        if (count <= target) {
          text.textContent = `${count}%`;
          const offset = circumference - (count / 100) * circumference;
          circle.style.strokeDashoffset = offset;
          animationIds[idx] = requestAnimationFrame(step);
        }
      };

      animationIds[idx] = requestAnimationFrame(step);
    });

    // ✅ cleanup: cancel animations if component unmounts
    return () => animationIds.forEach((id) => cancelAnimationFrame(id));
  }, [skills]);

  return (
    <section className={styles.about}>
      <h1 className={styles.aboutTitle}>About Me</h1>
      <p className={styles.justify}>
        I am a Software Intern at <strong>Nimblix Technologies, Bangalore</strong>, passionate about Full Stack development and Machine Learning.
        Skilled in Java, Node.js, Express, MySQL, HTML/CSS/JS, and building practical ML prototypes.
      </p>

      {/* Education */}
      <h2 className={styles.sectionTitle}>Education</h2>
      <div className={styles.educationGrid}>
        {education.map((edu, idx) => (
          <div key={idx} className={styles.educationCard}>
            <h3>{edu.level}</h3>
            <p>{edu.school}</p>
            <span>{edu.gpa}</span>
          </div>
        ))}
      </div>

      {/* Skills */}
      <h2 className={styles.sectionTitle}>Skills</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, idx) => (
          <div key={idx} className={styles.circularSkill}>
            <div className={styles.particles}></div>
            <svg className={styles.progressCircle} viewBox="0 0 36 36">
              <path
                className={styles.bg}
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={styles.progress}
                ref={(el) => (circleRefs.current[idx] = el)}
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text
                x="18"
                y="20.35"
                className={styles.percentage}
                ref={(el) => (numberRefs.current[idx] = el)}
              >
                0%
              </text>
            </svg>
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Hobbies */}
      <h2 className={styles.sectionTitle}>Hobbies</h2>
      <div className={styles.hobbies}>
        {hobbies.map((hobby, idx) => (
          <div key={idx} className={styles.hobbyCard}>{hobby}</div>
        ))}
      </div>
    </section>
  );
}
