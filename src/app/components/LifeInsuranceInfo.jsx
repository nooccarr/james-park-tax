import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';
import PageHeader from './PageHeader';
import InfoFooterImg from '../images/info-footer.png';
import '../styles/savings-info.css';

const LifeInsuranceInfo = () => {

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
              <Ratio aspectRatio={49 / 80}>
                <img src={InfoFooterImg} alt='' />
              </Ratio>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LifeInsuranceInfo;