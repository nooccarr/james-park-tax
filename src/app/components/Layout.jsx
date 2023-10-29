import { Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Layout = () => {
  return (
    <>
      <Container fluid>
        <nav>
          <ul>
            <Row>
              <Col>
                <li>
                  <Link to='/about-us'>회사소개</Link>
                </li>
              </Col>
              <Col>
                <li>
                  <Link to='/services'>서비스</Link>
                </li>
              </Col>
              <Col>
                <li>
                  <Link to='/tax-info'>Tax 정보</Link>
                </li>
              </Col>
              <Col>
                <li>
                  <Link to='/medicare-info'>Medicare 정보</Link>
                </li>
              </Col>
              <Col>
                <li>
                  <Link to='/contact-us'>Contact Us</Link>
                </li>
              </Col>
            </Row>
          </ul>
        </nav>
      </Container>

      <Outlet />
    </>
  )
};

export default Layout;