import { useEffect, useState } from 'react';
import useScrollToTop from '../hooks/useScrollToTop';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faBookmark } from '@fortawesome/free-solid-svg-icons';
import Pagination from './Pagination';
import usePutData from '../hooks/usePutData';
import isToken from '../utils/isToken';
import '../styles/post-list.css';

const PostList = ({
  searchMessage,
  posts,
  category,
  handleSearchReset,
  cookies,
}) => {
  const [categoryPosts, setCategoryPosts] = useState([]);
  const [putData, { response, error, isLoading }] = usePutData();
  const { '*': path } = useParams();

  useScrollToTop();
  useEffect(() => {
    category ? getCategoryPosts() : setCategoryPosts(posts);
  }, [posts]);

  const getCategoryPosts = () => {
    const filteredPosts = posts?.filter((post) => post.category === category);
    const sortedPosts = filteredPosts?.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setCategoryPosts(sortedPosts);
  };

  const handleToggleHidePost = (id) => {
    const updatedPosts = categoryPosts.map((post) => {
      if (post._id === id) post.hidden = !post.hidden;
      return post;
    });
    setCategoryPosts(updatedPosts);
    const updatedPost = categoryPosts.find((post) => post._id === id);
    putData(`/blogs/${id}`, updatedPost);
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
            <div
              key={post._id}
              className={`${post.hidden && !isToken(cookies) && 'hidden'}`}
            >
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
                  <div className="flex justify-between items-center">
                    <Link to={`/${post.path}/${post.slug}`}>
                      <button
                        className="article-button"
                        onClick={handleSearchReset}
                      >
                        read more
                      </button>
                    </Link>
                    <div className="flex gap-4">
                      {isToken(cookies) && (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                          >
                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                            <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                          </svg>

                          <button
                            onClick={() => handleToggleHidePost(post._id)}
                          >
                            {post.hidden ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-6 h-6"
                              >
                                <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-6 h-6"
                              >
                                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                <path
                                  fill-rule="evenodd"
                                  d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            )}
                          </button>
                        </>
                      )}
                    </div>
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
