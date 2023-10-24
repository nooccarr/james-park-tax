import { Link, useParams, useNavigate } from 'react-router-dom';
const Resource = ['tax', 'medicare'];

const PostList = ({ posts }) => {
  const { resourceId } = useParams();
  const resource = Resource.includes(resourceId);

  if (!resource) return <span>The resource you've requested doesn't exist.</span>;

  return (
    <div>
      <h3>{resourceId}</h3>
    <ul>
        {/* {console.log(posts)} */}
        {Object.entries(posts).map(([slug, { title }]) => (
          <li key={slug}>
            <Link to={`/resources/${resourceId}/${slug}`}>
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;