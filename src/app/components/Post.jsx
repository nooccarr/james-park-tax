import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faBookmark } from "@fortawesome/free-solid-svg-icons";
import pathToCapitalized from '../utils/pathToCapitalized';
import '../styles/post.css';

const Post = ({ posts }) => {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post) return <span>The post you've requested doesn't exist.</span>;

  const { title, article, category, path } = post;
  const articleContent = article;
  const capitalizedPath = pathToCapitalized(path);

  return (

    <main>
      <Container className='mb-5'>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>


            <h3 className='post-title'>{title}</h3>

            <div className='post-category-container'>
              <div className='post-author'>
                <FontAwesomeIcon icon={faPen} />
                &nbsp;James Park
              </div>
              <div className='px-2'>/</div>
              <div className='post-category'>
                <FontAwesomeIcon icon={faBookmark} />
                &nbsp;{category}
              </div>
            </div>


            {/* <h3 className='article-title'>{title}</h3> */}
            <div className='post-content' dangerouslySetInnerHTML={{ __html: articleContent }} />
            <Link to={`/${path}`}>Back to {capitalizedPath}</Link>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Post;