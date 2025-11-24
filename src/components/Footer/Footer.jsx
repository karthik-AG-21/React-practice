import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <button className={styles.prevBtn}>Previous</button>
      <button className={styles.nextBtn}>Next »</button>
      <p className={styles.text}>Powered by <a href="#" className={styles.link}>Tailwind CSS</a></p>
    </footer>
  );
}