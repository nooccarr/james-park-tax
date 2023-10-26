import { Link, useLocation } from 'react-router-dom';

const PostList = ({ posts }) => {
  return (
    <div>
      <ul>
        {Object.entries(posts).map(([slug, { path, title }]) => (
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