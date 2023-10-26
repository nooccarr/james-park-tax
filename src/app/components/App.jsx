import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import SearchParams from './SearchParams';
import Layout from './Layout';
import Home from './Home';
import AboutUs from './AboutUs';
import TaxInfo from './TaxInfo';
import MedicareInfo from './MedicareInfo';
import Results from './Results';
import ContactUs from './ContactUs';
import PostList from './PostList';
import Post from './Post';
import NoMatch from './NoMatch';
import Footer from './Footer';
const Posts = {
  "first-tax-post": {
    "category": "Tax",
    "path": "tax-info",
    "title": "First Tax Post",
    "description": "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem."
  },
  "second-tax-post": {
    "category": "Tax",
    "path": "tax-info",
    "title": "Second Tax Post",
    "description": "Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc."
  },
  "first-medicare-post": {
    "category": "Medicare",
    "path": "medicare-info",
    "title": "First Medicare Post",
    "description": "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet."
  },
  "second-medicare-post": {
    "category": "Medicare",
    "path": "medicare-info",
    "title": "Second Medicare Post",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
  }
};

const App = () => {
  const [posts, setPosts] = useState({});
  const [searchPosts, setSearchPosts] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    requestPosts();
  }, []);

  const requestPosts = async () => {
    try {
      setPosts(Posts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearchQueryChange(e.target.value);
  };

  const handleSearchQueryChange = (query) => {
    if (query.length) {
      const filteredPosts = Object.entries(posts).filter(
        ([slug, { title, description }]) => title.toLowerCase().includes(query.toLowerCase()) || description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchPosts(Object.fromEntries(filteredPosts));
    } else {
      setSearchPosts({});
    }
  };

  return (
    <div>
      <Routes>
        <Route path='/search' element={<SearchParams searchQuery={searchQuery} handleSearchChange={handleSearchChange} />} />
        <Route path='*' element={<Header />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='tax-info' element={<TaxInfo category='Tax' />}>
            <Route index element={<PostList posts={posts} category='Tax' />} />
            <Route path=':slug' element={<Post posts={posts} />} />
          </Route>
          <Route path='medicare-info' element={<MedicareInfo category='Medicare' />}>
            <Route index element={<PostList posts={posts} category='Medicare' />} />
            <Route path=':slug' element={<Post posts={posts} />} />
          </Route>
          <Route path='search' element={<Results />}>
            <Route index element={<PostList posts={searchPosts} searchQuery={searchQuery} />} />
            <Route path=':slug' element={<Post posts={searchPosts} />} />
          </Route>
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;