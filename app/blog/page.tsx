import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Importance of SEO in 2024',
      excerpt: 'Learn why SEO is more important than ever for business success in the current digital landscape.',
      date: 'October 15, 2024'
    },
    {
      title: 'Social Media Strategies That Work',
      excerpt: 'Discover effective social media strategies to engage your audience and grow your brand.',
      date: 'October 10, 2024'
    },
    {
      title: 'Email Marketing Best Practices',
      excerpt: 'Maximize your email marketing ROI with these proven best practices and techniques.',
      date: 'October 5, 2024'
    },
    {
      title: 'Web Development Trends to Watch',
      excerpt: 'Stay ahead of the curve with these emerging web development trends and technologies.',
      date: 'October 1, 2024'
    }
  ];

  return (
    <div className={styles.blogPage}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1 className={styles.sectionTitle}>Our Blog</h1>
          <p>Insights and strategies from our digital marketing experts</p>
        </div>

        <div className={styles.blogGrid}>
          {blogPosts.map((post, index) => (
            <article key={index} className={`${styles.blogCard} ${styles.fadeIn}`}>
              <div className={styles.blogImage}>
                <div className={styles.imagePlaceholder}></div>
              </div>
              <div className={styles.blogContent}>
                <span className={styles.blogDate}>{post.date}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <Link href="#" className={styles.readMore}>Read More →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;