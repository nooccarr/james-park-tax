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
import NoMatch from './NoMatch';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/search' element={<SearchParams />} />
        <Route path='*' element={<Header />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='tax-info/*' element={<TaxInfo />} />
          <Route path='medicare-info/*' element={<MedicareInfo />} />
          <Route path='search' element={<Results />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;