import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const PageHeader = ({ title }) => {
  
  return (
    <Container as='section' className='py-5'>
      <Row as='h2' className='ps-2 py-5' style={{ color: '#FFF9D1', fontSize: '3em' }}>{title}</Row>
    </Container>
  );
};

export default PageHeader;