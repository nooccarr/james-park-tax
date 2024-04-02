import { useEffect, useState } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      console.log('JSON:', jsonData);
      setData(jsonData);
    } catch (error) {
      setError(error);
    }
  };

  //   fetchData();
  // }, [url]);

  return [fetchData, error];
};

export default useFetchData;
