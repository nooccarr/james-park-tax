import { Link, useParams } from 'react-router-dom';

const Post = ({ posts }) => {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post) return <span>The post you've requested doesn't exist.</span>;

  const { title, description } = post;

  return (
    <div>
      {console.log(posts)}
      <h1>Post ID: {slug}</h1>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to='/resources'>Back to Resources</Link>
    </div>
  );
};

export default Post;