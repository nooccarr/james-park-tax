import { useEffect, useState } from 'react';
import PageHeader from './PageHeader';
import usePostData from '../hooks/usePostData';
import TinyEditor from './TinyEditor';
import stripHTML from '../utils/stripHTML';
import { useNavigate } from 'react-router-dom';
import { formatTitle, categoryToPath } from '../utils/convertText';
import isToken from '../utils/isToken';

const NewPost = ({ cookies }) => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [postData, { response, error, isLoading }] = usePostData('/blogs');

  useEffect(() => {
    const token = isToken(cookies);
    if (!token) navigate('/login');
  }, [cookies]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      user: '65f1ee2a444a71cb5af846bd',
      slug: formatTitle(formData.get('title'), ' '),
      category: formData.get('category') ?? '',
      path: categoryToPath(formData.get('category')),
      title: formatTitle(formData.get('title'), '-') ?? '',
      description: stripHTML(content),
      article: content,
      hidden: formData.get('hidden') ?? false,
    };

    console.log('NEW POST DATA:', data);
    postData(data);
  };

  return (
    <div>
      <div className="services-header-image">
        <PageHeader title="New Post" />
      </div>
      <div className="max-w-[900px] mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col my-10 mx-5 md:mx-10 mb-20 md:mb-40"
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

          <label htmlFor="content-body">Body</label>
          <TinyEditor setContent={setContent} />
        </form>
      </div>
    </div>
  );
};

export default NewPost;
