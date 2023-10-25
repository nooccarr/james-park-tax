import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/about-us'>회사소개</Link>
          </li>
          <li>
            <Link to='/tax-info'>Tax 정보</Link>
          </li>
          <li>
            <Link to='/medicare-info'>Medicare 정보</Link>
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