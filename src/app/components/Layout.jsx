import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../styles/layout.css';
const NavItems = [
  { link: 'about-us', title: '회사소개' },
  { link: 'services', title: '서비스' },
  { link: 'tax-info', title: 'Tax 정보' },
  { link: 'medicare-info', title: 'Medicare 정보' },
  { link: 'life-insurance-info', title: 'Life Insurance 정보'},
  { link: 'contact-us', title: 'Contact Us' }
];

const Layout = ({ handleSearchReset }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTextCenter, setCenterText] = useState(false);

  useEffect(() => {
    const onWindowResize = () => {
      window.innerWidth <= 991 ? setIsMobile(true) : setIsMobile(false);
      window.innerWidth <= 767 ? setCenterText(true) : setCenterText(false);
    };
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  return (
    <>
      <nav className='nav-container'>
          <Container className='py-3'>
            <Row>
              <Stack direction='horizontal' gap={3}>
                {isMobile && !isTextCenter && (
                  <>
                    <div className='mx-auto'></div>
                    <div className='py-2 navbars'>
                      <FontAwesomeIcon icon={faBars} />
                    </div>
                  </>
                )}

                {isTextCenter && (
                  <div className='py-2 navbars mx-auto'>
                    <FontAwesomeIcon icon={faBars} />
                  </div>
                )}

                {!isMobile && (
                  NavItems.map(({ link, title }) => (
                    <div className='py-2 pe-5' key={title}>
                      <Link to={link} onClick={handleSearchReset} className='navlink'>
                        {title}
                      </Link>
                    </div>
                  )))
                }
                {!isMobile && (
                  <div className='py-2 ms-auto'>
                    <Link to='search' className='navsearch'>
                      <FontAwesomeIcon icon={faMagnifyingGlass}  />
                    </Link>
                  </div>
                )}
              </Stack>
            </Row>
          </Container>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;