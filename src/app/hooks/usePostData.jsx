import { useState } from 'react';

const usePostData = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const postData = async (data) => {
    setIsLoading(true);
    try {
      const result = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseJson = await result.json();
      setIsLoading(false);
      setResponse(responseJson);
      console.log('RESPONSE:', responseJson);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return [postData, { response, error, isLoading }];
};

export default usePostData;
