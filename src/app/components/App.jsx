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
import NoMatch from './NoMatch';
import Footer from './Footer';
import Kakaotalk from '../images/kakaotalk-offcanvas.png';
import useFetchData from '../hooks/useFetchData';
import '../styles/app.css';
import Posts from '../data/posts';

const App = () => {
  const [posts, setPosts] = useState({});
  const [searchPosts, setSearchPosts] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMessage, setSearchMessage] = useState('');
  const [searchLength, setSearchLength] = useState(0);
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [showKakaoCanvas, setShowKakaoCanvas] = useState(false);
  const [data, error] = useFetchData('/blogs');

  useEffect(() => {
    // const requestPosts = () => { TODO:
    //   try {
    const myposts = data();
    //     console.log('POSTS:', myposts);
    //     setPosts(Posts);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // requestPosts();
    console.log('DATA:', data);
  }, []);

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
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <Footer />
      {showKakaoCanvas && (
        <div className="offcanvas-background-image md:absolute w-[370px] h-screen top-0 right-0 z-10 p-5">
          <div className="flex justify-end">
            <div onClick={handleKakaoCanvasClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="h-5 w-5 hover:cursor-pointer"
                fill="#fff9d1"
              >
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
              </svg>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <img src={Kakaotalk} alt="" className="offcanvas-kakao-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
