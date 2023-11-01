import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../images/logo.png';
import '../styles/Header.css';

const Header = () => {


  return (
    <header>
      <Container>
        <Row>
          <Col className='py-4'>
            <Link to='/'>
              <img src={Logo} alt='' />
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