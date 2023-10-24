import { Routes, Route } from 'react-router-dom';
import SearchParams from "./SearchParams";
import ResourcesLayout from './ResourcesLayout';
import Resource from './Resource';
import PostList from './PostList';
import Post from './Post';
const BlogPosts = {
  'first-blog-post': {
    title: 'First Blog Post',
    description: 'Lorem ipsum dolor sit amet, consectetur adip.'
  },
  'second-blog-post': {
    title: 'Second Blog Post',
    description: 'Hello React Router v6'
  }
};

const Resources = () => {
  return (
    <div>
      <div>
        <h2>Resources</h2>
      </div>
      <main>
        <section>
          <Routes>
            <Route index element={<SearchParams />} />
          </Routes>        
        </section>
        <section>
          <Routes>
            <Route index element={<ResourcesLayout />} />
            <Route path=':resourceId' element={<Resource />}>
              <Route index element={<PostList posts={BlogPosts} />} />
              <Route path=':slug' element={<Post posts={BlogPosts} />} />
            </Route>
          </Routes>
        </section>
      </main>

    </div>
  );
};

export default Resources;