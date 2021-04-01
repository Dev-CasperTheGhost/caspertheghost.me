import Link from "next/link";
import * as React from "react";
import { Post } from "types/Post";
import styles from "css/blog.module.scss";

interface Props {
  post: Post;
}

const BlogHeader: React.FC<Props> = ({ post }) => {
  const [createdAt, setCreatedAt] = React.useState(null);

  React.useEffect(() => {
    setCreatedAt(new Date(post.created_at).toLocaleDateString());
  }, [post?.created_at]);

  return (
    <header className={styles.blog__header}>
      <div className={styles.left__container}>
        <div className={styles.left__text}>
          <h1 className={styles.blog__author}>{post.title}</h1>
          <h2 className={styles.blog__date}>
            Created on <span>{createdAt}</span>
          </h2>
        </div>
      </div>

      <div className={styles.right__container}>
        <Link href="/blog">
          <a href="/blog">Return</a>
        </Link>
      </div>
    </header>
  );
};

export default BlogHeader;