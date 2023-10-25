import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PostList from './PostList';
import Post from './Post';

const MedicarePosts = {
  'first-medicare-post': {
    title: 'First Medicare Post',
    description: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.'
  },
  'second-medicare-post': {
    title: 'Second Medicare Post',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
  }
};

const MedicareInfo = ({ infoType = 'Medicare'}) => {
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

export default MedicareInfo;