import { Link, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Layout = () => {
  return (
    <>
      <Navbar bg='light' data-bs-theme='light'>
        <Container>
          <Nav className='me-auto'>

          <Nav.Item className='me-3'>
            <Link to='/about-us'>회사소개</Link>
          </Nav.Item>

          <Nav.Item className='me-3'>
            <Link to='/services'>서비스</Link>
          </Nav.Item>

          <Nav.Item className='me-3'>
            <Link to='/tax-info'>Tax 정보</Link>
          </Nav.Item>

          <Nav.Item className='me-3'>
            <Link to='/medicare-info'>Medicare 정보</Link>
          </Nav.Item>

          <Nav.Item>
            <Link to='/contact-us'>Contact Us</Link>
            </Nav.Item>
          </Nav>

          <Link to='/search'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
        </Container>
      </Navbar>

      <Outlet />
    </>
  )
};

export default Layout;