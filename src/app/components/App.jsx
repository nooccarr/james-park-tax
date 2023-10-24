import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Layout from './Layout';
import Home from './Home';
import AboutUs from './AboutUs';
import Services from './Services';
import Resources from './Resources';
import PostList from './PostList';
import Post from './Post';
import ContactUs from './ContactUs';
import NoMatch from './NoMatch';
import Footer from './Footer';
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

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='services' element={<Services />} />
          <Route path='resources' element={<Resources />}>
            <Route index element={<PostList posts={BlogPosts} />} />
            <Route path=':slug' element={<Post posts={BlogPosts} />} />
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