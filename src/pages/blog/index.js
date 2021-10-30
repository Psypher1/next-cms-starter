import Link from "next/link";
import styles from "../../styles/Home.module.css";
// import article data from file

Blog.title = "Blog";
export default function Blog({ posts }) {
  return (
    <div className={styles.main}>
      <h1>Articles</h1>
    </div>
  );
}

// fetch article data from file
// export async function getStaticProps() {
//   return {};
// }
