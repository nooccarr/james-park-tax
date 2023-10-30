import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MedicareInfo = ({ category }) => {

  return (
    <>
      <section>
        <Container fluid>
          <Row>
            <Col>
              <div>
                <h2>{category} 정보</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MedicareInfo;