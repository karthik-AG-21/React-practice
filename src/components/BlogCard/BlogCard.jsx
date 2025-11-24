import styles from './BlogCard.module.css';

export default function BlogCard({ title, date, description, image, comments }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}><b>{title}</b></h3>
        <h5 className={styles.cardDate}>
          {date} <span className={styles.opacity}>April 7, 2014</span>
        </h5>
      </div>
      <div className={styles.cardBody}>
        <p>{description}</p>
        <div className={styles.cardFooter}>
          <button className={styles.readBtn}><b>READ MORE »</b></button>
          <span className={styles.comments}><b>Comments</b> <span className={styles.badge}>{comments}</span></span>
        </div>
      </div>
    </div>
  );
}