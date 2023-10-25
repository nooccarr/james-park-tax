import { Link, useParams, useLocation } from 'react-router-dom';

const Post = ({ posts, infoType }) => {
  const { slug } = useParams();
  const post = posts[slug];

  const { pathname } = useLocation();
  const info = pathname.split('/')[1];

  if (!post) return <span>The post you've requested doesn't exist.</span>;

  const { title, description } = post;

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={`/${info}`}>Back to {infoType} Info</Link>
    </div>
  );
};

export default Post;