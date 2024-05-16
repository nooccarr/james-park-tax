import useScrollToTop from '../hooks/useScrollToTop';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { pathToText } from '../utils/convertText';
import { useEffect, useState } from 'react';
import '../styles/post.css';

const Post = ({ posts }) => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [post, setPost] = useState({});

  useScrollToTop();

  useEffect(() => {
    const foundPost = posts?.find((post) => post.slug === slug);
    if (foundPost) setPost(foundPost);
  }, [posts]);

  const articleContent = post?.article;

  const getPath = (path) => {
    const match = path.match(/^\/(.*?)\//);
    const portion = match ? match[1] : null;
    return portion;
  };

  const currentPath = getPath(window.location.pathname);

  return (
    <main>
      <div className="mb-5">
        <div>
          <div>
            <h2 className="py-5">&nbsp;</h2>
          </div>
        </div>

        <div>
          <div className="mb-5">
            {posts?.length && !post?.title ? (
              <div className="flex flex-col gap-6 justify-center items-center">
                <p className="text-xl">
                  The post you've requested doesn't exist.
                </p>
                <button
                  className="post-link-category"
                  onClick={() => navigate(`/${currentPath}`)}
                >
                  Back to {pathToText(currentPath)} page
                </button>
              </div>
            ) : posts?.length === 0 ? (
              <div
                role="status"
                className="animate-pulse bg-white p-10 border-2 border-gray-200"
              >
                <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-8"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-1/5 mb-8"></div>
                {[...Array(8)].map((_, index) => (
                  <div key={index}>
                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-2/3 mb-8"></div>
                  </div>
                ))}
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-1/5 mb-8"></div>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <section className="post-container mb-3">
                <div className="p-0 mt-2">
                  <h3 className="post-title">{post?.title}</h3>
                  <div className="post-category-container">
                    <div className="post-author">
                      <FontAwesomeIcon icon={faPen} />
                      &nbsp;James Park
                    </div>
                    <div className="px-2">/</div>
                    <div className="post-category">
                      <FontAwesomeIcon icon={faBookmark} />
                      &nbsp;{post?.category}
                    </div>
                  </div>
                  <div
                    className="post-content"
                    dangerouslySetInnerHTML={{ __html: articleContent }}
                  />
                  <button
                    className="post-link-category"
                    onClick={() => navigate(-1)}
                  >
                    Back to previous page
                  </button>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Post;
