import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PostList from './PostList';
import Post from './Post';

const TaxPosts = {
  'first-tax-post': {
    title: 'First Tax Post',
    description: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'
  },
  'second-tax-post': {
    title: 'Second Tax Post',
    description: 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.'
  }
};

const TaxInfo = ({ infoType = 'Tax' }) => {
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
        <h2>{infoType} 정보</h2>
      </div>
      <main>
        <Routes>
          <Route index element={<PostList posts={posts} />} />
          <Route path=':slug' element={<Post posts={posts} infoType={infoType} />} />
        </Routes>
      </main>
    </div>
  );
};

export default TaxInfo;