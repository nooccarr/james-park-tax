import { useState } from 'react';

const usePostData = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const postData = async (data, setPosts) => {
    setIsLoading(true);
    try {
      const createPost = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseJson = await createPost.json();
      setIsLoading(false);
      setResponse(responseJson);

      const fetchPosts = await fetch(
        `${import.meta.env.DEV ? 'http://localhost:4000' : ''}/blogs`
      );
      const posts = await fetchPosts.json();
      setPosts(posts);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return [postData, { response, error, isLoading }];
};

export default usePostData;
