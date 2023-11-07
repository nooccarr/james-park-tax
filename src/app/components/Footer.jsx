import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/footer.css';

const Footer = () => {
  const today = new Date();

  return (
    <footer>
      <Container>
        <Row className='pt-5 pb-2'>
          <Col md={{ offset: 3 }}>
            <div className='footer-location'>LOCATIONS</div>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col md={{ offset: 3, span: 3 }}>
            <div className='footer-location-title'>New York</div>
            <div className='footer-location-address'>163-10 Northern Blvd</div>
            <div className='pb-5 footer-location-address'>Flushing, NY 11358</div>
          </Col>
          <Col md={{ span: 3 }}>
            <div className='footer-location-title'>New Jersey</div>
            <div className='footer-location-address'>163-10 Northern Blvd</div>
            <div className='pb-5 footer-location-address'>Flushing, NY 11358</div>
          </Col>
        </Row>
        <div className='pb-5 text-end copyright-text'>
          For general inquiries call 718-359-1096 / 201-625-3060<br/>
          &copy; {today.getFullYear()} James Park Tax & Accounting, Inc.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;