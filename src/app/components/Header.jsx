import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {


  return (
    <header>
      <Container fluid>
        <Row>
          <Col>
            <Link to='/'>
              <h1>James Park</h1>
              <h2>Tax & Accounting</h2>
            </Link>
          </Col>
          <Col>
            <div>
              <span>CALL US TODAY</span>
              <a href='tel:+17183591096'>(718) 359-1096</a>
            </div>
          </Col>
          <Col>
            <div>
              <Link to='/search'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;