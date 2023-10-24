import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/about-us'>About Us</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/resources'>Resources</Link>
            <ul>
              <li>
                <Link to='/resources/tax'>Tax Information</Link>
              </li>
              <li>
                <Link to='/resources/medicare'>Medicare Information</Link>
              </li>              
            </ul>
          </li>
          <li>
            <Link to='/contact-us'>Contact Us</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  )
};

export default Layout;