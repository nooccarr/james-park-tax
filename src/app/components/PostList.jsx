import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts, category, searchQuery }) => {
  const [categoryPosts, setCategoryPosts] = useState({});

  useEffect(() => {
    category ? getCategoryPosts() : setCategoryPosts(posts);
  }, [posts]);

  const getCategoryPosts = () => {
    const filteredPosts = Object.entries(posts).filter(
      ([slug, post]) => post.category === category
    );
    setCategoryPosts(Object.fromEntries(filteredPosts));
  };

  return (
    <div>
      {!Object.keys(categoryPosts).length && searchQuery?.length ? (
        <h2>Sorry, no results matched your search terms</h2>
      ) : (
        <ul>
          {Object.entries(categoryPosts).map(([slug, { path, title }]) => (
            <li key={slug}>
              <Link to={`/${path}/${slug}`}>
                <h3>{title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;