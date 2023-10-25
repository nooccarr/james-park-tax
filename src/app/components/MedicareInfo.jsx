import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PostList from './PostList';
import Post from './Post';

const MedicarePosts = {
  'first-medicare-post': {
    title: 'First Medicare Post',
    description: 'Lorem ipsum dolor sit amet, consectetur adip.'
  },
  'second-medicare-post': {
    title: 'Second Medicare Post',
    description: 'Hello React Router v6'
  }
};

const MedicareInfo = () => {
  const [posts, setPosts] = useState({}); 

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    setPosts(MedicarePosts);
  };

  return (
    <div>
      <div>
        <h2>Medicare 정보</h2>
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

export default MedicareInfo;