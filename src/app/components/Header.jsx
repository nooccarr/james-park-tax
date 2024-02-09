import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';
import Logo from '../images/logo.png';
import Kakaotalk from '../images/kakaotalk-offcanvas.png';
import '../styles/header.css';

const Header = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
    const onWindowResize = () => {
      window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
    };
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  const handleOffCanvasShow = () => {
    setShowOffCanvas(true);
  };
  const handleOffCanvasClose = () => {
    setShowOffCanvas(false);
  };

  const headerMobileView = isMobile ? 'header-mobile' : '';

  return (
    <header className={`${headerMobileView}`}>
      <div>
        {!isMobile && (
          <div>
            <div className="py-4">
              <h1 className="text-hide">James Park Tax & Accounting</h1>
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div md="auto" className="my-auto "></div>
            <div md="auto" className="my-auto">
              <a
                href="tel:+1-718-359-1096"
                className="header-tel"
                style={{ fontSize: '20px' }}
              >
                (718) 359-1096
              </a>
              &nbsp;/&nbsp;
              <a
                href="tel:+1-201-625-3060"
                className="header-tel"
                style={{ fontSize: '20px' }}
              >
                (201) 625-3060
              </a>
              <div style={{ fontSize: '12px', fontWeight: '500' }}>
                Call Us Today for a Free Consultation
              </div>
            </div>
            <div md="auto" className="my-auto "></div>
            <div md="auto" className="my-auto">
              <a onClick={handleOffCanvasShow}>
                <span className="icon-kakao"></span>
              </a>
            </div>
          </div>
        )}
        {isMobile && (
          <div>
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
        )}
      </div>

      <div
      // show={showOffCanvas} TODO:
      // placement="end"
      // onHide={handleOffCanvasClose}
      // className="offcanvas-background-image"
      >
        <div closeButton closeVariant="white" className="mb-4">
          <div>&nbsp;</div>
        </div>
        <div>
          {/* <img src={Kakaotalk} alt="" className="offcanvas-kakao-image" /> TODO: */}
        </div>
      </div>
    </header>
  );
};

export default Header;
