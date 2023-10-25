import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PostList from './PostList';
import Post from './Post';

// TODO: Restructure this data file. Make sure to add a category property to each post.

const SearchResults = {
  'first-tax-post': {
    title: 'First Tax Post',
    description: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'
  },
  'second-tax-post': {
    title: 'Second Tax Post',
    description: 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.'
  },
  'first-medicare-post': {
    title: 'First Medicare Post',
    description: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.'
  },
  'second-medicare-post': {
    title: 'Second Medicare Post',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
  }
};

const Results = ({ infoType = 'All' }) => {
  const [posts, setPosts] = useState({}); 

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    setPosts(SearchResults);
  };

  return (
    <div>
      {!posts.length ? (
        <h1>No Posts Found</h1>
      ) : (
        <div>
          <div>
            <h2>Search Results</h2>
          </div>
        <main>
        {/* <Routes>
            <Route index element={<PostList posts={posts} />} />
            <Route path=':slug' element={<Post posts={posts} infoType={infoType} />} />
          </Routes> */}
        </main>
      </div>
      )}
    </div>
  );
};

export default Results;