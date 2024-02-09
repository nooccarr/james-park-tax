import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faBookmark } from '@fortawesome/free-solid-svg-icons';
import '../styles/post-list.css';

const PostList = ({ searchMessage, posts, category, handleSearchReset }) => {
  const [categoryPosts, setCategoryPosts] = useState({});

  useEffect(() => {
    category ? getCategoryPosts() : setCategoryPosts(posts);
  }, [posts]);

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const getCategoryPosts = () => {
    const filteredPosts = Object.entries(posts).filter(
      ([_slug, post]) => post.category === category
    );
    setCategoryPosts(Object.fromEntries(filteredPosts));
  };

  return (
    <>
      <main>
        <div className="mb-5">
          <div className="justify-content-lg-center">
            <div md="auto">
              <h2 className="py-5 search-message">{searchMessage}</h2>
            </div>
          </div>

          {Object.entries(categoryPosts).map(([slug, post]) => (
            <div key={slug}>
              <div md={{ span: 10, offset: 1 }} className="mb-5">
                <section className="article-container mb-3">
                  <div className="p-0 mt-2">
                    <Link
                      className="article-title-anchor"
                      to={`/${post.path}/${slug}`}
                      onClick={handleSearchReset}
                    >
                      <span className="article-title">{post.title}</span>
                    </Link>
                    <div className="article-category-container">
                      <div className="article-author">
                        <FontAwesomeIcon icon={faPen} />
                        &nbsp;James Park
                      </div>
                      <div className="px-2">/</div>
                      <div className="article-category">
                        <FontAwesomeIcon icon={faBookmark} />
                        &nbsp;{post.category}
                      </div>
                    </div>
                    <div className="article-description">
                      {post.description}
                    </div>
                  </div>
                  <div className="">
                    <Link to={`/${post.path}/${slug}`}>
                      <button
                        className="article-button"
                        onClick={handleSearchReset}
                      >
                        read more
                      </button>
                    </Link>
                  </div>
                </section>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default PostList;
