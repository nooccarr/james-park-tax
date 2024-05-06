import { useState } from 'react';
import usePostData from '../hooks/usePostData';
import TinyEditor from './TinyEditor';
import stripHTML from '../utils/stripHTML';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { formatTitle, categoryToPath } from '../utils/convertText';
import { toast, ToastContainer } from 'react-toastify';
import useScrollToTop from '../hooks/useScrollToTop';

const EditPost = ({ posts }) => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [postData, { response, error, isLoading }] = usePostData('/blogs');

  const { slug } = useParams();
  const post = posts?.find((post) => post.slug === slug);

  if (!post)
    return (
      <span className="flex justify-center text-xl">
        The post you've requested doesn't exist.
      </span>
    );

  console.log(post);
  // const { title, article, category, path } = post;
  // const articleContent = article;
  // const capitalizedPath = pathToCapitalize(path);

  useScrollToTop();

  const handleError = (err) =>
    toast.error(err, {
      position: 'bottom-left',
    });

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: 'bottom-left',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      user: '6621ac64db80e29ffedb9afc',
      slug: formatTitle(formData.get('title'), '-') ?? '',
      category: formData.get('category') ?? '',
      path: categoryToPath(formData.get('category')),
      title: formatTitle(formData.get('title'), ' '),
      description: stripHTML(content),
      article: content,
      hidden: formData.get('hidden') ?? false,
    };

    try {
      postData(data);
      handleSuccess('Post created successfully!');
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error) {
      console.log(error);
      handleError(error.response.data.message);
    }
  };

  return (
    <div className="max-w-[900px] mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h4 className="font-semibold text-gray-600 pb-4">Category</h4>
        <div className="flex gap-4">
          <label>
            <input type="radio" id="tax" name="category" value="Tax" required />
            &nbsp;Tax 정보
          </label>

          <label>
            <input
              type="radio"
              id="insurance"
              name="category"
              value="Insurance"
              required
            />
            &nbsp;Insurance 정보
          </label>
        </div>

        <h4 className="font-semibold text-gray-600 pt-2 pb-4">Content</h4>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          className="border-2 border-gray-100 rounded-lg focused:border-blue-600 px-4 py-2"
          required
        />

        <p htmlFor="content-body">Body</p>
        <TinyEditor setContent={setContent} />
      </form>
      <Link to={`/${post?.path}`} style={{ textDecoration: 'none' }}>
        <span className="post-link-category">Back to {post?.category}</span>
      </Link>
      <ToastContainer />
    </div>
  );
};

export default EditPost;
