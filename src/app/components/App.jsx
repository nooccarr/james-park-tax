import { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  createSearchParams,
} from 'react-router-dom';
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
import AdminPortal from './AdminPortal';
import TermsAndConditions from './TermsAndConditions';
// import Signup from './Signup';
import KakaoCanvas from './KakaoCanvas';
import NoMatch from './NoMatch';
import Footer from './Footer';
import useFetchData from '../hooks/useFetchData';
import '../styles/app.css';
// import Posts from '../data/posts';
import Modal from 'react-modal';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import isToken from '../utils/isToken';
import isProtectedPath from '../utils/isProtectedPath';
import ScrollButton from './ScrollButton';
import MagiCalculator from './MagiCalculator';

Modal.setAppElement('#root');

const App = () => {
  const location = useLocation();
  const [blogs, error, isLoading] = useFetchData(
    `${import.meta.env.DEV ? 'http://localhost:4000' : ''}/blogs`
  );
  const [posts, setPosts] = useState([]);
  const [categoryPosts, setCategoryPosts] = useState([]);
  const [searchPosts, setSearchPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMessage, setSearchMessage] = useState('');
  const [searchLength, setSearchLength] = useState(0);
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [showKakaoCanvas, setShowKakaoCanvas] = useState(false);
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(['token']);
  const [username, setUsername] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query') || '';
  const page = searchParams.get('page') || '1';

  useEffect(() => {
    const maxPage = Math.ceil(categoryPosts.length / 5);
    if (Number(page) < 1 || (categoryPosts.length && Number(page) > maxPage)) {
      setCurrentPage(1);
      navigate(location.pathname);
    }
  }, [page, categoryPosts]);

  useEffect(() => {
    if (!query) {
      setSearchPosts([]);
      setSearchMessage('');
      setSearchLength(0);
      if (location.pathname === '/search') searchParams.set('page', '1');
    } else {
      setSearchMessage(`Search results for "${query}"`);
      const filteredPosts = posts.filter(
        ({ title, description }) =>
          title.toLowerCase().includes(query.toLowerCase()) ||
          description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchPosts(filteredPosts);
      setSearchLength(filteredPosts.length);
    }

    setSearchQuery(query);
    setCurrentPage(Number(page));
  }, [searchParams, posts]);

  useEffect(() => {
    const verifyCookie = async (retryCount = 3) => {
      const token = isToken(cookies);
      const protectedPath = isProtectedPath(location.pathname);
      if (!token && protectedPath) navigate('/login');
      try {
        const { data } = await axios.post(
          `${import.meta.env.DEV ? 'http://localhost:4000' : ''}/verify`,
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        if (user) setUsername(user);
        !status && removeCookie('token');
      } catch (error) {
        console.log(error);
        if (retryCount > 0) {
          verifyCookie(retryCount - 1);
        }
      }
    };
    verifyCookie();
  }, [navigate, removeCookie]);

  useEffect(() => {
    const currentBlogs = blogs?.length ? blogs : [];
    setPosts(currentBlogs);
  }, [blogs]);

  const handleSearchQueryChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (!value) {
      setSearchPosts([]);
      setSearchMessage('');
      setSearchLength(0);
    } else {
      setSearchMessage(`Search results for "${value}"`);
      const filteredPosts = posts.filter(
        ({ title, description }) =>
          title.toLowerCase().includes(value.toLowerCase()) ||
          description.toLowerCase().includes(value.toLowerCase())
      );
      setSearchPosts(filteredPosts);
      setSearchLength(filteredPosts.length);
      navigate({
        pathname: '/search',
        search: `?${createSearchParams({
          query: value,
          page: page,
        })}`,
      });
    }
    setCurrentPage(1);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchReset = () => {
    setSearchQuery('');
    setSearchPosts([]);
    setSearchMessage('');
  };

  const handleOffCanvasToggle = () => {
    setShowOffCanvas(!showOffCanvas);
  };

  const handleOffCanvasClose = () => {
    setShowOffCanvas(false);
  };

  const handleKakaoCanvasOpen = () => {
    setShowKakaoCanvas(true);
  };

  const handleKakaoCanvasClose = () => {
    setShowKakaoCanvas(false);
  };

  const onSearchPageChange = (page) => {
    setCurrentPage(page);
    searchParams.set('page', page);
    navigate({
      pathname: '/search',
      search: `?${createSearchParams({
        query: searchQuery,
        page: page,
      })}`,
    });
  };

  const onTaxInfoPageChange = (page) => {
    setCurrentPage(page);
    searchParams.set('page', page);
    navigate({
      pathname: '/tax-info',
      search: `?${createSearchParams({
        page: page,
      })}`,
    });
  };

  const onInsuranceInfoPageChange = (page) => {
    setCurrentPage(page);
    searchParams.set('page', page);
    navigate({
      pathname: '/insurance-info',
      search: `?${createSearchParams({
        page: page,
      })}`,
    });
  };

  const postsSize = posts.length;

  return (
    <>
      <Header
        handleOffCanvasToggle={handleOffCanvasToggle}
        handleOffCanvasClose={handleOffCanvasClose}
        handleKakaoCanvasOpen={handleKakaoCanvasOpen}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              handleSearchReset={handleSearchReset}
              showOffCanvas={showOffCanvas}
              handleOffCanvasClose={handleOffCanvasClose}
              cookies={cookies}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tax-info" element={<TaxInfo />}>
            <Route
              index
              element={
                <PostList
                  posts={posts}
                  categoryPosts={categoryPosts}
                  setCategoryPosts={setCategoryPosts}
                  category={'Tax'}
                  cookies={cookies}
                  isLoading={isLoading}
                  currentPage={currentPage}
                  onPageChange={onTaxInfoPageChange}
                />
              }
            />
            <Route path="edit/:slug" element={<EditPost posts={posts} />} />
            <Route
              path=":slug"
              element={<Post posts={posts} cookies={cookies} />}
            />
          </Route>
          <Route path="/insurance-info" element={<InsuranceInfo />}>
            <Route
              index
              element={
                <PostList
                  posts={posts}
                  categoryPosts={categoryPosts}
                  setCategoryPosts={setCategoryPosts}
                  category={'Insurance'}
                  cookies={cookies}
                  isLoading={isLoading}
                  currentPage={currentPage}
                  onPageChange={onInsuranceInfoPageChange}
                />
              }
            />
            <Route
              path="edit/:slug"
              element={<EditPost posts={posts} cookies={cookies} />}
            />
            <Route path=":slug" element={<Post posts={posts} />} />
          </Route>
          <Route
            path="/search"
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
                  categoryPosts={categoryPosts}
                  setCategoryPosts={setCategoryPosts}
                  searchMessage={searchMessage}
                  handleSearchReset={handleSearchReset}
                  currentPage={currentPage}
                  onPageChange={onSearchPageChange}
                  searchQuery={searchQuery}
                  postsSize={postsSize}
                />
              }
            />
            <Route
              path=":slug"
              element={<Post posts={searchPosts} cookies={cookies} />}
            />
          </Route>
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/new-post" element={<NewPost setPosts={setPosts} />} />

          <Route path="/login" element={<Login />} />
          <Route
            path="/admin-portal"
            element={
              <AdminPortal username={username} removeCookie={removeCookie} />
            }
          />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/magi-calculator" element={<MagiCalculator />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <Footer />
      <KakaoCanvas
        showKakaoCanvas={showKakaoCanvas}
        handleKakaoCanvasClose={handleKakaoCanvasClose}
      />
      <ScrollButton />
    </>
  );
};

export default App;
