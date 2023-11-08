import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import EmailForm from './EmailForm';
import PageHeader from './PageHeader';
import '../styles/services.css';
const ServiceItems = ['한국거주 영주권, 시민권자 세금보고', '증여, 상속세, 양도세 상담 (한국 및 미국)', '사업체 세금 및 개인 세금 보고', '세금공제용 은퇴연금 (IRA, SEP IRA, 401K) 전문', '메디케어 건강보험 안내 (65세 이상)', '저축보험 (가족의 보장+ 노후준비)'];

const Services = () => {
  return (
    <div className='services-background'>
      <div className='services-header-image'>
        <PageHeader title='서비스' />
      </div>

      <Container className='my-5'>
        <Row>
          <Col md={8} className='pe-5'>
            <ListGroup as='ul' className='text-center rounded-0'>
              <ListGroup.Item as='li' className='py-4' style={{ backgroundColor: '#043A49'}}>
                <h4 className='service-li-h4'>감사 및 회계 업무</h4>
                <h5 className='service-li-h5'>exceptional service</h5>
              </ListGroup.Item>
              {ServiceItems.map((item) => (
                <ListGroup.Item as='li' key={item} className='border-white' style={{ backgroundColor: '#F1F1F1'}}>
                  <span className='service-li'>
                    {item}
                  </span>
                </ListGroup.Item>
              ))}
              <ListGroup.Item as='li' className='py-3 mb-5' style={{ backgroundColor: '#043A49', borderBottom: '3px solid #AA9465'}}>
                &nbsp;
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <EmailForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;