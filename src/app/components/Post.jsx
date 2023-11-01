import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pathToCapitalized from '../utils/pathToCapitalized';

const Post = ({ posts }) => {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post) return <span>The post you've requested doesn't exist.</span>;

  const { title, article, path } = post;
  const articleContent = article;
  const capitalizedPath = pathToCapitalized(path);

  return (

    <main>
      <Container>
        <Row>
          <Col>
            <h3>{title}</h3>
            <div dangerouslySetInnerHTML={{ __html: articleContent }} />
            <Link to={`/${path}`}>Back to {capitalizedPath}</Link>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Post;