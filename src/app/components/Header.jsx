import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/logo.png';

import '../styles/header.css';

const Header = ({
  showOffCanvas,
  setShowOffCanvas,
  showKakaoCanvas,
  setShowKakaoCanvas,
}) => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
  //   const onWindowResize = () => {
  //     window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
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

  const handleKakaoCanvasShow = () => {
    setShowKakaoCanvas(true);
  };

  // const headerMobileView = isMobile ? 'header-mobile' : '';

  return (
    // <header className={`${headerMobileView}`}>
    <header className=" flex flex-col">
      <div className="px-5 md:px-10 py-4">
        <div className="max-w-[2240px] mx-auto">
          <div className="flex items-center">
            <div className="md:min-w-[250px]">
              <h1 className="text-hide">James Park Tax & Accounting</h1>
              <Link to="/">
                <img src={Logo} onClick={handleOffCanvasClose} alt="" />
              </Link>
            </div>
            <div className="flex-1"></div>

            <div className="ms-4 md:hidden flex items-center gap-4">
              <div className="">
                <Link to="search" className="navsearch-mobile">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    onClick={handleOffCanvasClose}
                  />
                </Link>
              </div>
              <div className="py-2">
                <FontAwesomeIcon
                  className="navbars"
                  onClick={() => setShowOffCanvas(!showOffCanvas)}
                  icon={faBars}
                />
              </div>
            </div>

            <div className="hidden md:inline-block me-10">
              <a href="tel:+1-718-359-1096" className="header-tel text-xl">
                (718) 359-1096
              </a>
              &nbsp;/&nbsp;
              <a href="tel:+1-201-625-3060" className="header-tel text-xl">
                (201) 625-3060
              </a>
              <div className="text-xs font-medium">
                Call Us Today for a Free Consultation
              </div>
            </div>
            <div className="hidden md:inline-block">
              <a onClick={handleKakaoCanvasShow}>
                <span className="icon-kakao"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="order-first bg-[#235161] md:hidden">
        <div className="header-mobile-container text-center">
          <div className="header-mobile-text">
            Address: 163-10 Northern Blvd, NY 11358
          </div>
          <div>
            <a
              href="tel:+1-718-359-1096"
              className="header-mobile-text header-mobile-link"
            >
              Telephone: (718) 359-1096
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
