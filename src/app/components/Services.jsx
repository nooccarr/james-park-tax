import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EmailForm from './EmailForm';

const Services = () => {
  return (
    <div style={{ height: '1080px' }}>
      <Container fluid>
        <Row>
          <Col>
            <section>
              <div>
                <h2>서비스</h2>
              </div>
            </section>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <main>
              <ul>
                <li>한국거주 영주권, 시민권자 세금보고</li>
                <li>증여, 상속세, 양도세 상담 (한국 및 미국)</li>
                <li>사업체 세금 및 개인 세금 보고</li>
                <li>세금공제용 은퇴연금 (IRA, SEP IRA, 401K) 전문</li>
                <li>메디케어 건강보험 안내 (65세 이상)</li>
                <li>저축보험 (가족의 보장+ 노후준비)</li>
              </ul>
            </main>
          </Col>
          <Col>
            <EmailForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;