import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/logo.png';
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
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
    window.innerWidth > 991 ? setIsTablet(true) : setIsTablet(false);
    window.innerWidth > 1400 ? setIsDesktop(true) : setIsDesktop(false);
    const onWindowResize = () => {
      window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
      window.innerWidth > 991 ? setIsTablet(true) : setIsTablet(false);
      window.innerWidth > 1400 ? setIsDesktop(true) : setIsDesktop(false);
    };
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  const navMobileView = isMobile ? 'nav-mobile-view' : '';
  const navItemSpacing = isDesktop ? 'pe-5 me-5' : isTablet ? 'pe-5' : 'pe-2';

  return (
    <>
      <nav className={`nav-container ${navMobileView}`}>
          <Container className='py-3'>
            <Row>
              <Stack direction='horizontal' gap={4}>
                {isMobile && (
                  <>
                    <Link to='/'>
                      <img src={Logo} alt='' />
                    </Link>
                    <div className='mx-auto'></div>
                    <div className='py-2 navbars'>
                      <FontAwesomeIcon icon={faBars} />
                    </div>
                  </>
                )}

                {!isMobile && (
                  NavItems.map(({ link, title }) => (
                    <div className={`py-2 ${navItemSpacing}`} key={title}>
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