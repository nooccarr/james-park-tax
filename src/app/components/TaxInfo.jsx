import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import PageHeader from './PageHeader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TaxInfoImg from '../images/tax-info.png';
import '../styles/tax-info.css';

const TaxInfo = () => {

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='tax-info-background'>
      <div className='tax-info-header-image'>
        <PageHeader title='Tax 정보' />
      </div>

      <Container>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <img src={TaxInfoImg} alt='' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TaxInfo;