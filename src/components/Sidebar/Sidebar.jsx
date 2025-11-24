import styles from './Sidebar.module.css';

export default function Sidebar() {
    const posts = [
        { id: 1, name: 'Lorem', desc: 'Sed mattis nunc', image: 'https://www.w3schools.com/w3images/workshop.jpg' },
        { id: 2, name: 'Ipsum', desc: 'Praes tinci sed', image: 'https://www.w3schools.com/w3images/skies.jpg' },
        { id: 3, name: 'Dorum', desc: 'Ultricies congue', image: 'https://www.w3schools.com//w3images/gondol.jpg' },
        { id: 4, name: 'Mingsum', desc: 'Lorem ipsum dipsum', image: 'https://www.w3schools.com/w3images/rock.jpg' }
    ];

    const tags = ['Travel', 'New York', 'London', 'IKEA', 'NORWAY', 'DIY', 'Ideas', 'Baby', 'Family'];

    return (
        <aside className={styles.sidebar}>
            {/* About Card */}
            <div className={styles.sideCard}>
                <img src="https://www.w3schools.com/w3images/avatar_g.jpg" alt="Avatar" className={styles.cardImage} />
                <div className={styles.cardContent}>
                    <h4 className={styles.cardTitle}>My Name</h4>
                    <p className={styles.cardText}>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
                </div>
            </div>

            {/* Popular Posts */}
            <div className={styles.sideCard}>
                <div className={styles.cardHeader}>
                    <h4 className={styles.cardTitle}>Popular Posts</h4>
                </div>
                <ul className={styles.postsList}>
                    {posts.map(post => (
                        <li key={post.id} className={styles.postItem}>
                            <img src={post.image} alt={post.name} className={styles.postImage} />
                            <div className="flex-1">
                                <div className={styles.postName}>{post.name}</div>
                                <div className={styles.postDesc}>{post.desc}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tags */}
            <div className={styles.sideCard}>
                <div className={styles.cardHeader}>
                    <h4 className={styles.cardTitle}>Tags</h4>
                </div>
                <div className={styles.tagsContainer}>
                    {tags.map((tag, index) => (
                        <span key={tag} className={index === 0 ? styles.tagItemBlack : styles.tagItem}>{tag}</span>
                    ))}
                </div>
            </div>
        </aside>
    );
}