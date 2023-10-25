import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PostList from './PostList';
import Post from './Post';

const TaxPosts = {
  'first-tax-post': {
    title: 'First Tax Post',
    description: 'Lorem ipsum dolor sit amet, consectetur adip.'
  },
  'second-tax-post': {
    title: 'Second Tax Post',
    description: 'Hello React Router v6'
  }
};

const TaxInfo = () => {
  const [posts, setPosts] = useState({}); 

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    setPosts(TaxPosts);
  };

  return (
    <div>
      <div>
        <h2>Tax 정보</h2>
      </div>
      <main>
        <Routes>
          <Route index element={<PostList posts={posts} />} />
          <Route path=':slug' element={<Post posts={posts} />} />
        </Routes>
      </main>
    </div>
  );
};

export default TaxInfo;