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
      console.log('RETRY COUNT:', retryCount);
      if (retryCount === 0) {
        setError(error);
        setIsLoading(false);
      } else {
        setTimeout(() => {
          fetchData(retryCount - 1);
        }, 1500);
      }
    }
  };

  useEffect(() => {
    fetchData(retryCount);
  }, [url, retryCount]);

  return [data, error, isLoading];
};

export default useFetchData;
