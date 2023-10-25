import { Link, useParams, useLocation } from 'react-router-dom';

const Post = ({ posts }) => {
  const { slug } = useParams();
  const post = posts[slug];

  const { pathname } = useLocation();

  if (!post) return <span>The post you've requested doesn't exist.</span>;

  const { title, description } = post;

  return (
    <div>
      {/* {console.log(posts)} */}
      <h1>Post ID: {slug}</h1>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={`/${pathname.split('/')[1]}`}>Back to Resources</Link>
    </div>
  );
};

export default Post;