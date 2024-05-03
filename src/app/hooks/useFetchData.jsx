import { useEffect, useState } from 'react';

const useFetchData = (url, retryCount = 3) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (retryCount) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      if (retryCount === 0) {
        setError(error);
        setIsLoading(false);
      } else {
        fetchData(retryCount - 1);
      }
    }
  };

  useEffect(() => {
    fetchData(retryCount);
  }, [url, retryCount]);

  return [data, error, isLoading];
};

export default useFetchData;
