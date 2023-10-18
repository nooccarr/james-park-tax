import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Services from './Services';
import Resources from './Resources';
import Contact from './Contact';
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
            <Route path='about' element={<About />} />
            <Route path='services' element={<Services />} />
            <Route path='resources' element={<Resources />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;