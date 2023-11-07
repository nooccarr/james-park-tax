import { Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
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
  const handleLayoutItemClick = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className='nav-container'>
          <Container className='py-3'>
            <Row>
              {NavItems.map(({ link, title }) => (
                <Col key={title}>
                  <Link to={link} onClick={handleLayoutItemClick} className='navlink'>
                    {title}
                  </Link>
                </Col>
              ))}

              <Col className='text-end'>
                <Link to='search' onClick={handleLayoutItemClick} className='navsearch'>
                  <FontAwesomeIcon icon={faMagnifyingGlass}  />
                </Link>
              </Col>
            </Row>
          </Container>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
