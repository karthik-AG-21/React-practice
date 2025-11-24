import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>MY BLOG</h1>
      <p className={styles.subtitle}>
        Welcome to the blog of <span className={styles.tag}>unknown</span>
      </p>
    </header>
  );
}