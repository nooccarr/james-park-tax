import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import EmailForm from './EmailForm';
import PageHeader from './PageHeader';
import '../styles/services.css';

const Services = () => {
  return (
    <>
      <div className='services-header-image'>
        <PageHeader title='서비스' />
      </div>

      <Container className='my-5'>
        <Row>
          <Col>
            <ListGroup as='ul' className='text-center'>
              <ListGroup.Item as='li' className='py-4' style={{ backgroundColor: '#043A49'}}>
                <h4 className='service-li-h4'>감사 및 회계 업무</h4>
                <h5 className='service-li-h5'>exceptional service</h5>
              </ListGroup.Item>
              <ListGroup.Item as='li'>
                <span className='service-li'>
                  한국거주 영주권, 시민권자 세금보고
                </span>
              </ListGroup.Item>
              <ListGroup.Item as='li'>
                <span className='service-li'>
                  증여, 상속세, 양도세 상담 (한국 및 미국)
                </span>
              </ListGroup.Item>
              <ListGroup.Item as='li'>
                <span className='service-li'>
                  사업체 세금 및 개인 세금 보고
                </span>
              </ListGroup.Item>
              <ListGroup.Item as='li'>
                <span className='service-li'>
                  세금공제용 은퇴연금 (IRA, SEP IRA, 401K) 전문
                </span>
              </ListGroup.Item>
              <ListGroup.Item as='li'>
                <span className='service-li'>
                  메디케어 건강보험 안내 (65세 이상)
                </span>
              </ListGroup.Item>      
              <ListGroup.Item as='li'>
                <span className='service-li'>
                  저축보험 (가족의 보장+ 노후준비)
                </span>
              </ListGroup.Item>

            </ListGroup>
          </Col>
          <Col>
            <EmailForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;