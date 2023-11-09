import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageHeader from './PageHeader';
import MedicareInfoImg from '../images/medicare-info.png';
import '../styles/medicare-info.css';

const MedicareInfo = () => {

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='medicare-info-background'>
      <div className='medicare-info-header-image'>
        <PageHeader title='Medicare 정보' />
      </div>

      <Container>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
        <Row>
          <Col className='text-center pb-5'>
            <img src={MedicareInfoImg} alt='' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MedicareInfo;