import { Link, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Layout = () => {
  return (
    <>
      <Navbar bg='light' data-bs-theme='light'>
        <Container>
          <Nav.Link>
            <Link to='/about-us'>회사소개</Link>
          </Nav.Link>

          <Nav.Link>
            <Link to='/services'>서비스</Link>
          </Nav.Link>

          <Nav.Link>
            <Link to='/tax-info'>Tax 정보</Link>
          </Nav.Link>

          <Nav.Link>
            <Link to='/medicare-info'>Medicare 정보</Link>
          </Nav.Link>

          <Nav.Link>
            <Link to='/contact-us'>Contact Us</Link>
          </Nav.Link>
        </Container>
      </Navbar>

      <Outlet />
    </>
  )
};

export default Layout;