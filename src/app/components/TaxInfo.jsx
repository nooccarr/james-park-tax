import { Outlet } from 'react-router-dom';
import PageHeader from './PageHeader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TaxInfo = () => {
  return (
    <>
      <div className='tax-info-header-image'>
        <PageHeader title='Tax 정보' />
      </div>

      <Container className='my-5'>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TaxInfo;