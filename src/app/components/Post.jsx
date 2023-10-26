import { Link, useParams } from 'react-router-dom';

const Post = ({ posts, capitalizedCategory }) => {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post) return <span>The post you've requested doesn't exist.</span>;

  const { title, description, path } = post;

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={`/${path}`}>Back to {capitalizedCategory} Info</Link>
    </div>
  );
};

export default Post;