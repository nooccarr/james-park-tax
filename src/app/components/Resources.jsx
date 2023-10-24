// import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SearchParams from "./SearchParams";
// import PostList from './PostList';

const Resources = () => {
  // const [posts, setPosts] = useState(BlogPosts);

  return (
    <div>
      <div>
        <h2>Resources</h2>
      </div>
      <main>
        <SearchParams />
      </main>
      <Outlet />
    </div>
  );
};

export default Resources;