import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  return (
    <ul>
      {/* {console.log(posts)} */}
      {Object.entries(posts).map(([slug, { title }]) => (
        <li key={slug}>
          <Link to={`/resources/${slug}`}>
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;