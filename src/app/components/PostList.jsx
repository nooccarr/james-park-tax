import { Link, useLocation } from 'react-router-dom';

const PostList = ({ posts }) => {
  const { pathname } = useLocation();

  return (
    <div>
      <ul>
        {Object.entries(posts).map(([slug, { title }]) => (
          <li key={slug}>
            <Link to={`${pathname}/${slug}`}>
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;