import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  const today = new Date();

  return (
    <footer>
      <Container fluid>
        <Row>
          <Col>
            <p>
              <span>&copy; {today.getFullYear()} </span>
              James Park Tax & Accounting, Inc.
            </p>
            <p>
              <span>163-10 Northern Blvd | Flushing, NY 11358 | (718) 359-1098</span>
            </p>
            <p>
              <span>Site Designed by </span>
              <a href='https://www.soohyunlim.dev/'>Soohyun Lim</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;