import { useRef, useState, useEffect } from 'react';
import usePutData from '../hooks/usePutData';
import TinyEditor from './TinyEditor';
import stripHTML from '../utils/stripHTML';
import { useNavigate, useParams } from 'react-router-dom';
import { formatTitle, categoryToPath } from '../utils/convertText';
import { toast, ToastContainer } from 'react-toastify';
import useScrollToTop from '../hooks/useScrollToTop';

const EditPost = ({ posts }) => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [putData, { response, error, isLoading }] = usePutData();

  const post = posts?.find((post) => post.slug === slug);

  // console.log(post);

  useEffect(() => {
    if (formRef.current && post) {
      formRef.current.elements.category.value = post.category;
      formRef.current.elements.title.value = post.title;
    }
  }, [formRef, post]);

  useScrollToTop();

  // if (!post)
  //   return (
  //     <span className="flex justify-center text-xl">
  //       The post you've requested doesn't exist.
  //     </span>
  //   );

  // const { title, article, category, path } = post;
  // const articleContent = article;
  // const capitalizedPath = pathToCapitalize(path);

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
    post.slug = formatTitle(formData.get('title'), '-') || post.slug;
    post.category = formData.get('category') || post.category;
    post.path = categoryToPath(formData.get('category')) || post.path;
    post.title = formatTitle(formData.get('title'), ' ') || post.title;
    post.description = stripHTML(content);
    post.article = content || post.article;
    try {
      putData(`/blogs/${slug}`, post);
      handleSuccess('Post updated successfully!');
      setTimeout(() => {
        navigate(-1);
      }, 1500);
    } catch (error) {
      console.log(error);
      handleError(error.response.data.message);
    }
  };

  return (
    <div className="max-w-[900px] mx-auto animate-fadeIn select-none">
      <div className="flex flex-col gap-20 justify-center items-center py-20 mx-5 pb-60 md:hidden">
        <p className="text-xl text-center">
          For the best experience, please access this page using a laptop or
          desktop computer.
        </p>
        <button className="post-link-category" onClick={() => navigate(-1)}>
          Back to {post?.category} Info
        </button>
      </div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="hidden md:flex flex-col"
      >
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
        <TinyEditor article={post?.article} setContent={setContent} />
      </form>
      <div className="hidden md:inline-block pt-10">
        <button className="post-link-category" onClick={() => navigate(-1)}>
          Back to {post?.category} Info
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditPost;
