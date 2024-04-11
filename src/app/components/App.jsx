import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Layout from './Layout';
import Home from './Home';
import AboutUs from './AboutUs';
import TaxInfo from './TaxInfo';
import InsuranceInfo from './InsuranceInfo';
import Services from './Services';
import ContactUs from './ContactUs';
import Results from './Results';
import PostList from './PostList';
import Post from './Post';
import NewPost from './NewPost';
import EditPost from './EditPost';
import Login from './Login';
import Signup from './Signup';
import KakaoCanvas from './KakaoCanvas';
import NoMatch from './NoMatch';
import Footer from './Footer';
import useFetchData from '../hooks/useFetchData';
import '../styles/app.css';
import Posts from '../data/posts';

const App = () => {
  const [data, error] = useFetchData('/blogs');
  const [posts, setPosts] = useState({});
  const [searchPosts, setSearchPosts] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMessage, setSearchMessage] = useState('');
  const [searchLength, setSearchLength] = useState(0);
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [showKakaoCanvas, setShowKakaoCanvas] = useState(false);

  useEffect(() => {
    setPosts(Posts);
    // setPosts(data);
  }, [data]);

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (!searchQuery) {
      setSearchPosts({});
      setSearchMessage('');
      setSearchLength(0);
    } else {
      setSearchMessage(`Search results for "${searchQuery}"`);
      const filteredPosts = Object.entries(posts).filter(
        ([_slug, { title, description }]) =>
          title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchPosts(Object.fromEntries(filteredPosts));
      setSearchLength(filteredPosts.length);
    }
  };

  const handleSearchReset = () => {
    setSearchQuery('');
    setSearchPosts({});
    setSearchMessage('');
  };

  const handleKakaoCanvasClose = () => {
    setShowKakaoCanvas(false);
  };

  return (
    <div className="relative">
      <Header
        showOffCanvas={showOffCanvas}
        setShowOffCanvas={setShowOffCanvas}
        showKakaoCanvas={showKakaoCanvas}
        setShowKakaoCanvas={setShowKakaoCanvas}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              handleSearchReset={handleSearchReset}
              showOffCanvas={showOffCanvas}
              setShowOffCanvas={setShowOffCanvas}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="tax-info" element={<TaxInfo />}>
            <Route index element={<PostList posts={posts} category="Tax" />} />
            <Route path=":slug" element={<Post posts={posts} />} />
          </Route>
          <Route path="insurance-info" element={<InsuranceInfo />}>
            <Route
              index
              element={<PostList posts={posts} category="Insurance" />}
            />
            <Route path=":slug" element={<Post posts={posts} />} />
          </Route>
          <Route
            path="search"
            element={
              <Results
                searchQuery={searchQuery}
                handleSearchQueryChange={handleSearchQueryChange}
                handleSearchSubmit={handleSearchSubmit}
                searchLength={searchLength}
              />
            }
          >
            <Route
              index
              element={
                <PostList
                  posts={searchPosts}
                  searchMessage={searchMessage}
                  handleSearchReset={handleSearchReset}
                />
              }
            />
            <Route path=":slug" element={<Post posts={searchPosts} />} />
          </Route>
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="new-post" element={<NewPost />} />
          <Route path="edit-post" element={<EditPost />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <Footer />
      {showKakaoCanvas && (
        <KakaoCanvas handleKakaoCanvasClose={handleKakaoCanvasClose} />
      )}
    </div>
  );
};

export default App;
