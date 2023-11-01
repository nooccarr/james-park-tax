import { Link, Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../styles/Layout.css';
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

        <Container>
          <Row>
            <Col>
              <Stack as='ul' direction='horizontal'>
                <Navbar>
                  <Nav>
                    {NavItems.map(({ link, title }) => (
                      <Link key={link} as='li' to={link} className='nav-link' style={{ color: '#FFF9D1'}}>
                          {title}
                      </Link>  
                    ))}
                  </Nav>
                </Navbar>
              </Stack>
            </Col>
            <Col>
              <Link to='search'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
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

// rgb(103, 125, 115)
// rgb(227, 241, 222) 