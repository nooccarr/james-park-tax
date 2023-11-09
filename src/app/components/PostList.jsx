import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faBookmark } from "@fortawesome/free-solid-svg-icons";
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
              <h2 className='py-5 search-message'>{searchMessage}</h2>
            </Col>
          </Row>

          {Object.entries(categoryPosts).map(([slug, post]) => (
            <Row key={slug}>
              <Col md={{ span: 10, offset: 1 }} className='mb-5'>

                <section className='article-container mb-3'>
                  <div className='p-0 mt-2'>
                    <Link className='article-title-anchor' to={`/${post.path}/${slug}`}>
                      <span className='article-title'>{post.title}</span>
                    </Link>
                    <div className='article-category-container'>
                      <div className='article-author'>
                        <FontAwesomeIcon icon={faPen} />
                        &nbsp;James Park
                      </div>
                      <div className='px-2'>/</div>
                      <div className='article-category'>
                        <FontAwesomeIcon icon={faBookmark} />
                        &nbsp;{post.category}
                      </div>
                    </div>
                    <div className='article-description'>{post.description}</div>
                  </div>
                  <div className=''>
                    <Link to={`/${post.path}/${slug}`}>
                      <button className='article-button'>read more</button>
                    </Link>
                  </div>
                </section>

              </Col>
            </Row>

          ))}
        </Container>
      </main>
    </>
  );
};

export default PostList;