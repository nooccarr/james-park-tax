import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PostList from './PostList';
import Post from './Post';
import capitalized from '../utils/capitalized';

const MedicareInfo = ({ category = 'medicare' }) => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    requestPosts();
  }, []);

  const requestPosts = async () => {
    try {
      const response = await fetch('../../../database/data.json');
      const { items } = await response.json();
      const { posts } = items[category];
      setPosts(posts);
    } catch (error) {
      console.error(error);
    }
  };

  const capitalizedCategory = capitalized(category);

  return (
    <div>
      <div>
        <h2>{capitalizedCategory} 정보</h2>
      </div>
      <main>
        <Routes>
          <Route index element={<PostList posts={posts} />} />
          <Route path=':slug' element={<Post posts={posts} capitalizedCategory={capitalizedCategory} />} />
        </Routes>
      </main>
    </div>
  );
};

export default MedicareInfo;