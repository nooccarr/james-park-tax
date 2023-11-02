import { Link, Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../styles/layout.css';
const NavItems = [
  { link: 'about-us', title: '회사소개' },
  { link: 'services', title: '서비스' },
  { link: 'tax-info', title: 'Tax 정보' },
  { link: 'medicare-info', title: 'Medicare 정보' },
  { link: 'contact-us', title: 'Contact Us' }
];

const Layout = () => {
  return (
    <>
      <nav className='nav-container'>
        <Navbar>
          <Container>
            <Nav as='ul'>
              {NavItems.map(({ link, title }) => (
                <Nav.Item key={link} as='li'>
                  <Link to={link} className='navlink'>
                      {title}
                  </Link>
                </Nav.Item>
              ))}
            </Nav>

            <Link to='search' className='navsearch'>
              <FontAwesomeIcon icon={faMagnifyingGlass}  />
            </Link>
          </Container> 
        </Navbar>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
