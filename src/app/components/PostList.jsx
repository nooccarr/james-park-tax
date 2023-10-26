import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts, category }) => {
  const [categoryPosts, setCategoryPosts] = useState({});

  useEffect(() => {
    category ? getCategoryPosts() : setCategoryPosts(posts);
  }, []);

  const getCategoryPosts = () => {
    const filteredPosts = Object.entries(posts).filter(
      ([slug, post]) => post.category === category
    );
    setCategoryPosts(Object.fromEntries(filteredPosts));
  };

  return (
    <div>
      <ul>
        {Object.entries(categoryPosts).map(([slug, { path, title }]) => (
          <li key={slug}>
            <Link to={`/${path}/${slug}`}>
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;