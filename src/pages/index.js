import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';   // ✅ Import Next.js Link

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section id="home" className={styles.hero}>
          <div className={styles.heroContent}>
            <Image 
              src="/images/profile.jpg" 
              alt="Koushik Thota" 
              width={220}   // increased width
              height={220}  // increased height
              className={styles.profilePic} 
            />
            <h1 className={styles.fadeIn}>Hi, I’m Koushik Thota 👋</h1>
            <p className={styles.fadeIn}>
              A passionate Full Stack Developer & ML Enthusiast.<br/>
              Skilled in Java, Node.js, SQL, and building practical ML prototypes.
            </p>

            <div className={styles.skills}>
              <span>Java</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MySQL</span>
              <span>HTML/CSS/JS</span>
              <span>Machine Learning</span>
            </div>

            <div className={styles.buttons}>
              {/* ✅ Use Link instead of <a> for internal navigation */}
              <Link href="/projects" className={styles.button}>
                View Projects
              </Link>
              <Link href="/contact" className={styles.buttonOutline}>
                Contact Me
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
