import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageHeader from './PageHeader';
import '../styles/medicare-info.css';

const MedicareInfo = () => {

  return (
    <div className='medicare-info-background'>
      <div className='medicare-info-header-image'>
        <PageHeader title='Medicare 정보' />
      </div>

      <Container className='mb-5'>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MedicareInfo;