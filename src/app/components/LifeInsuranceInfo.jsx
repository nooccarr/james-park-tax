import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';
import PageHeader from './PageHeader';
import InfoFooterImg from '../images/info-footer.png';
import '../styles/savings-info.css';

const LifeInsuranceInfo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
    const onWindowResize = () => {
      window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
    };
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='savings-info-background'>
      <div className='savings-info-header-image'>
        <PageHeader title='Life Insurance 정보' />
      </div>

      <Container>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
        <Row>
          <Col className='text-center' md={{ span: 8, offset: 2 }}>
            {!isMobile && (
              <Ratio aspectRatio={49 / 80}>
                <img src={InfoFooterImg} alt='' />
              </Ratio>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LifeInsuranceInfo;