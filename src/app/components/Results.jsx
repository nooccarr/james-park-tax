import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Results = () => {
  return (
    <div style={{ height: '1080px' }}>
      <Container fluid>
        <Row>
          <Col>
            <section>
              <div>
                <h2>Search Results</h2>
              </div>
            </section>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Results;