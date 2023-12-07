import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
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

  const handleOffCanvasShow = () => { setShowOffCanvas(true) };
  const handleOffCanvasClose = () => { setShowOffCanvas(false) };

  return (
    <header>
      <Container>
        {!isMobile && (
          <Row>
            <Col className='py-4'>
              <h1 className='text-hide'>James Park Tax & Accounting</h1>
              <Link to='/'>
                <img src={Logo} alt='' />
              </Link>
            </Col>
            <Col md='auto' className='my-auto '></Col>
            <Col md='auto' className='my-auto'>
              <a href='tel:+1-718-359-1096' className='header-tel' style={{ fontSize: '20px'}}>(718) 359-1096</a>
              &nbsp;/&nbsp;
              <a href='tel:+1-201-625-3060' className='header-tel' style={{ fontSize: '20px'}}>(201) 625-3060</a>
              <div style={{ fontSize: '12px', fontWeight: '500'}}>Call Us Today for a Free Consultation</div>
            </Col>
            <Col md='auto' className='my-auto '></Col>
            <Col md='auto' className='my-auto'>
              <a onClick={handleOffCanvasShow}>
                <span className='icon-kakao'></span>
              </a>
            </Col>

          </Row>
        )}
      </Container>

      <Offcanvas show={showOffCanvas} placement='end' onHide={handleOffCanvasClose} className='offcanvas-background-image'>
        <Offcanvas.Header closeButton closeVariant='white' className='mb-4'>
          <Offcanvas.Title>&nbsp;</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <img src={Kakaotalk} alt='' className='offcanvas-kakao-image' />
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;