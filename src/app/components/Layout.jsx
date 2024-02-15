import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faMagnifyingGlass,
  faPenToSquare,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/logo.png';
import '../styles/layout.css';
const NavItems = [
  { link: 'about-us', title: '회사소개' },
  { link: 'services', title: '서비스' },
  { link: 'tax-info', title: 'Tax 정보' },
  { link: 'medicare-info', title: 'Medicare 정보' },
  { link: 'life-insurance-info', title: 'Life Insurance 정보' },
  { link: 'contact-us', title: 'Contact Us' },
];

const Layout = ({ handleSearchReset }) => {
  // const [isMobile, setIsMobile] = useState(false);
  // const [isTablet, setIsTablet] = useState(false);
  // const [isDesktop, setIsDesktop] = useState(false);
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  // useEffect(() => {
  //   window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
  //   window.innerWidth > 991 ? setIsTablet(true) : setIsTablet(false);
  //   window.innerWidth > 1400 ? setIsDesktop(true) : setIsDesktop(false);
  //   const onWindowResize = () => {
  //     window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
  //     window.innerWidth > 991 ? setIsTablet(true) : setIsTablet(false);
  //     window.innerWidth > 1400 ? setIsDesktop(true) : setIsDesktop(false);
  //   };
  //   window.addEventListener('resize', onWindowResize);
  //   return () => window.removeEventListener('resize', onWindowResize);
  // }, []);

  const handleOffCanvasShow = () => {
    setShowOffCanvas(true);
  };
  const handleOffCanvasClose = () => {
    setShowOffCanvas(false);
  };

  // const navMobileView = isMobile ? 'nav-mobile-view' : '';
  // const navItemSpacing = isDesktop ? 'pe-5 me-5' : isTablet ? 'pe-5' : 'pe-2';

  return (
    <>
      <nav className="hidden md:block nav-container px-10">
        <div className="py-3">
          <div className="max-w-[2240px] mx-auto">
            <div>
              <div className="flex justify-between">
                {NavItems.map(({ link, title }) => (
                  <div className="py-2" key={title}>
                    <Link
                      to={link}
                      onClick={handleSearchReset}
                      className="navlink"
                    >
                      {title}
                    </Link>
                  </div>
                ))}

                <div className="flex items-center gap-4">
                  <div className="">
                    <Link to="search" className="navsearch">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>
                  </div>
                  <div>
                    <Link to="search" className="navsearch">
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </Link>
                  </div>
                  <div>
                    <Link to="search" className="navsearch">
                      <FontAwesomeIcon icon={faUser} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div
          show={showOffCanvas}
          placement="end"
          onHide={handleOffCanvasClose}
          style={{ backgroundColor: '#235161', width: '66%' }}
          >
          <div closeButton closeVariant="white" className="mb-4">
          <div>&nbsp;</div>
          </div>
          <div>
          <ul className="nav-dropdown">
          {NavItems.map(({ link, title }) => ( // TODO:
          <li
          className="py-2 nav-dropdown-item"
          onClick={handleOffCanvasClose}
          key={title}
          >
          <Link
          to={link}
          onClick={handleSearchReset}
          className="navlink"
          >
          {title}
          </Link>
          </li>
          ))}
          </ul>
          </div>
        </div> */}
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
