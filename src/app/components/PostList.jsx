import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PostList = ({ posts, category, searchQuery }) => {
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
        <Container>
          {!Object.keys(categoryPosts).length && searchQuery?.length ? (
            <Row>
              <Col>
                <h2>Sorry, no results matched your search terms</h2>
              </Col>
            </Row>
          ) : (
            <ul>
              <Row>
                <Col>
                  {Object.entries(categoryPosts).map(([slug, { path, title, description }]) => (
                      <li key={slug}>
                        <Link to={`/${path}/${slug}`}>
                          <h3>{title}</h3>
                        </Link>
                        <p>{description}</p>
                        <Link to={`/${path}/${slug}`}>
                          <button>continue reading</button>
                        </Link>
                      </li>
                  ))}
                </Col>
              </Row>
            </ul>
          )}
        </Container>
      </main>
    </>
  );
};

export default PostList;