import { useState } from 'react';
import PageHeader from './PageHeader';
import usePostData from '../hooks/usePostData';
import TipTap from './TipTap';
import stripHTML from '../utils/stripHTML';
import { formatTitle, categoryToPath } from '../utils/convertText';

const NewPost = () => {
  const [content, setContent] = useState('');
  const [postData, { response, error, isLoading }] = usePostData('/blogs');

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
      <form onSubmit={handleSubmit} className="flex flex-col m-10">
        <div className="flex gap-4">
          <label>
            Tax 정보&nbsp;
            <input type="radio" id="tax" name="category" value="Tax" required />
          </label>

          <label>
            Insurance 정보&nbsp;
            <input
              type="radio"
              id="insurance"
              name="category"
              value="Insurance"
              required
            />
          </label>
        </div>

        <label htmlFor="title">
          Title:
          <input type="text" id="title" name="title" required />
        </label>

        <TipTap setContent={setContent} />
        <div>
          <button type="submit" className="email-form-button bg-[#043a49]">
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
