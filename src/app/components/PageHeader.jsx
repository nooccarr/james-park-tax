import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PageHeader = ({ title }) => {
  return (
    <Container as='section' className='py-5'>
      <Row className='ps-2 py-5'>
        <Col className='p-0' style={{ color: '#FFF9D1', fontSize: '3em', fontWeight: 500 }}>{title}</Col>
      </Row>
    </Container>
  );
};

export default PageHeader;