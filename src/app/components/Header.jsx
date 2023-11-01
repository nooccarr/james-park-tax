import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {


  return (
    <header>
      <Container>
        <Row>
          <Col className='py-4'>
            <Link to='/'>
              <h1>James Park</h1>
              <h2>Tax & Accounting</h2>
            </Link>
          </Col>
          <Col md='auto' className='my-auto'>
            <div>CALL US TODAY</div>
            <a href='tel:+17183591096'>(718) 359-1096</a>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;