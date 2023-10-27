import { Link, useParams } from 'react-router-dom';
import pathToCapitalized from '../utils/pathToCapitalized';

const Post = ({ posts }) => {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post) return <span>The post you've requested doesn't exist.</span>;

  const { title, description, path } = post;

  const capitalizedPath = pathToCapitalized(path);

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={`/${path}`}>Back to {capitalizedPath}</Link>
    </div>
  );
};

export default Post;