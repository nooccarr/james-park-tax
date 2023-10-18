import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Layout from './Layout';
import Home from './Home';
import AboutUs from './AboutUs';
import Services from './Services';
import Resources from './Resources';
import ContactUs from './ContactUs';
import NoMatch from './NoMatch';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about-us' element={<AboutUs />} />
            <Route path='services' element={<Services />} />
            <Route path='resources' element={<Resources />} />
            <Route path='contact-us' element={<ContactUs />} />
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;