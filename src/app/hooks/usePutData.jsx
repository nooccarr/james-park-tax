import { useState } from 'react';

const usePutData = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const putData = async (url, data) => {
    setIsLoading(true);

    try {
      const result = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseJson = await result.json();
      setResponse(responseJson);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return [putData, { response, error, isLoading }];
};

export default usePutData;
