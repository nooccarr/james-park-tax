import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/post-list.css';

const PostList = ({ searchMessage, posts, category }) => {
  const [categoryPosts, setCategoryPosts] = useState({});

  useEffect(() => {
    category ? getCategoryPosts() : setCategoryPosts(posts);
  }, [posts]);

  const getCategoryPosts = () => {
    const filteredPosts = Object.entries(posts).filter(
      ([_slug, post]) => post.category === category
    );
    setCategoryPosts(Object.fromEntries(filteredPosts));
  };

  return (
    <>
      <main>
        <Container className='mb-5'>
          <Row className='justify-content-lg-center'>
            <Col md='auto'>
              <h2 className='pb-4 search-message'>{searchMessage}</h2>
            </Col>
          </Row>

          {Object.entries(categoryPosts).map(([slug, post]) => (
            <Row key={slug}>
              <Col md={{ span: 8, offset: 2 }} className='my-3'>

              <Card>
                <Card.Header as='h5'>{post.category}</Card.Header>
                <Card.Body>
                  <Link to={`/${post.path}/${slug}`}>
                    <Card.Title>{post.title}</Card.Title>
                  </Link>
                  <Card.Text>{post.description}</Card.Text>
                </Card.Body>
                <div className='pb-3 ps-3'>
                  <Link to={`/${post.path}/${slug}`}>
                    <Button>continue reading</Button>
                  </Link>
                </div>
              </Card>


              </Col>
            </Row>

          ))}
        </Container>
      </main>
    </>
  );
};

export default PostList;