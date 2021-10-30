import styles from "../../styles/Article.module.css";
import Link from "next/link";

export async function getStaticPaths() {
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props,
  };
}

export default function ArticleDetail({ article }) {
  console.log(article);
  return (
    <div className={styles.article}>
      <h5> Single Article Page</h5>
      <h2 className={styles.title}>{article.title}</h2>
      <p className={styles.content}>{article.description}</p>
      <br />
      <div className={styles.links}>
        <Link href="/blog">
          <a className={styles.back}> {"<Back to Blog"}</a>
        </Link>
        <Link href="/">
          <a className={styles.back}> {"<Home"}</a>
        </Link>
      </div>
    </div>
  );
}
