import { useEffect, useState } from 'react';
import useScrollToTop from '../hooks/useScrollToTop';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faBookmark } from '@fortawesome/free-solid-svg-icons';
import Pagination from './Pagination';
import '../styles/post-list.css';

const PostList = ({ searchMessage, posts, category, handleSearchReset }) => {
  const [categoryPosts, setCategoryPosts] = useState([]);
  const { '*': path } = useParams();

  useScrollToTop();
  useEffect(() => {
    category ? getCategoryPosts() : setCategoryPosts(posts);
  }, [posts]);

  const getCategoryPosts = () => {
    const filteredPosts = posts?.filter((post) => post.category === category);
    setCategoryPosts(filteredPosts);
  };

  const searchClass = path === 'search' ? 'pt-10 pb-16' : '';

  return (
    <>
      <main>
        <div className="mb-5">
          <div className="justify-content-lg-center">
            <div>
              <h2
                className={`search-message text-2xl md:text-[32px] font-semibold ${searchClass}`}
              >
                {searchMessage}
              </h2>
            </div>
          </div>

          {categoryPosts?.map((post) => (
            <div key={post._id}>
              <div className="md:mx-10 mb-5">
                <section className="article-container mb-3">
                  <div className="p-0 mt-2">
                    <Link
                      className="article-title-anchor"
                      to={`/${post.path}/${post.slug}`}
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
                    <Link to={`/${post.path}/${post.slug}`}>
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

        {categoryPosts?.length ? (
          <div className="md:px-10 mt-20">
            <Pagination
              itemsPerPage={5}
              totalItems={categoryPosts?.length}
              paginate={() => {}}
              path={path}
            />
          </div>
        ) : null}
      </main>
    </>
  );
};

export default PostList;
