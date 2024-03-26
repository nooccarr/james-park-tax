import { useState } from 'react';
// import useFetchData from '../hooks/useFetchData';
import usePostData from '../hooks/usePostData';
import TipTap from './TipTap';

const NewPost = () => {
  const [content, setContent] = useState('');
  // const { data, error } = useFetchData('/blogs');
  const [postData, { response, error, isLoading }] = usePostData('/blogs', {
    title: 'My Blog Post',
  });

  const handleSubmit = (content) => {
    const data = {
      user: '65f1ee2a444a71cb5af846bd',
      slug: '',
      category: '',
      path: '',
      title: '',
      description: '',
      article: content,
    };
    console.log(data);

    // postData();
  };

  return (
    <div>
      <h1>New Post</h1>
      <TipTap setContent={setContent} />
      <button onClick={() => handleSubmit(content)}>Create Post</button>
    </div>
  );
};

export default NewPost;
