import useScrollToTop from '../hooks/useScrollToTop';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { pathToCapitalize } from '../utils/convertText';
import '../styles/post.css';

const Post = ({ posts }) => {
  const { slug } = useParams();
  const post = posts?.find((post) => post.slug === slug);

  if (!post)
    return (
      <span className="flex justify-center text-xl">
        The post you've requested doesn't exist.
      </span>
    );

  const { title, article, category, path } = post;
  const articleContent = article;
  const capitalizedPath = pathToCapitalize(path);

  useScrollToTop();

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
            <section className="post-container mb-3">
              <div className="p-0 mt-2">
                <h3 className="post-title">{title}</h3>
                <div className="post-category-container">
                  <div className="post-author">
                    <FontAwesomeIcon icon={faPen} />
                    &nbsp;James Park
                  </div>
                  <div className="px-2">/</div>
                  <div className="post-category">
                    <FontAwesomeIcon icon={faBookmark} />
                    &nbsp;{category}
                  </div>
                </div>
                <div
                  className="post-content"
                  dangerouslySetInnerHTML={{ __html: articleContent }}
                />
                <Link to={`/${path}`} style={{ textDecoration: 'none' }}>
                  <span className="post-link-category">
                    Back to {capitalizedPath}
                  </span>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Post;
