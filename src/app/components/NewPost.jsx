import { useState } from 'react';
import PageHeader from './PageHeader';
import usePostData from '../hooks/usePostData';
import TinyEditor from './TinyEditor';
import stripHTML from '../utils/stripHTML';
import { useNavigate } from 'react-router-dom';
import { formatTitle, categoryToPath } from '../utils/convertText';
import { toast, ToastContainer } from 'react-toastify';
import useScrollToTop from '../hooks/useScrollToTop';

const NewPost = ({ setPosts }) => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [postData, { response, error, isLoading }] = usePostData('/blogs');

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
      postData(data, setPosts);
      handleSuccess('Post created successfully!');
      setTimeout(() => {
        navigate(`/${data.path}`);
      }, 1500);
    } catch (error) {
      console.log(error);
      handleError(error.response.data.message);
    }
  };

  return (
    <div className="tax-info-background animate-fadeIn select-none">
      <PageHeader title="New Post" image="services" />
      <main className="max-w-[900px] mx-auto">
        <div className="flex flex-col gap-20 justify-center items-center pt-20 mx-5 pb-80 md:hidden">
          <p className="text-xl text-center">
            For the best experience, please access this page using a laptop or
            desktop computer.
          </p>
          <button
            className="post-link-category"
            onClick={() => navigate('/admin-portal')}
          >
            Back to Admin Portal
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="hidden md:flex flex-col py-10 mx-5 md:mx-10 pb-20 md:pb-40"
        >
          <h4 className="font-semibold text-gray-600 pb-4">Category</h4>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                id="tax"
                name="category"
                value="Tax"
                required
              />
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
          <div className="pt-10">
            <button
              className="post-link-category"
              onClick={() => navigate('/admin-portal')}
            >
              Back to Admin Portal
            </button>
          </div>
        </form>
        <ToastContainer />
      </main>
    </div>
  );
};

export default NewPost;
