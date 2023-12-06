import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import EmailForm from './EmailForm';
import PageHeader from './PageHeader';
import '../styles/services.css';
const ServiceItems = ['한국거주 영주권, 시민권자 세금보고', '증여, 상속세, 양도세 상담 (한국 및 미국)', '사업체 세금 및 개인 세금 보고', '세금공제용 은퇴연금 (IRA, SEP IRA, 401K) 전문', '메디케어 건강보험 안내 (65세 이상)', '저축보험 (가족의 보장+ 노후준비)'];

const Services = () => {
  const [isMobile, setisMobile] = useState(false);
  const [isTablet, setisTablet] = useState(false);

  useEffect(() => {
    const onWindowResize = () => {
      window.innerWidth <= 991 ? setisTablet(true) : setisTablet(false);
      window.innerWidth <= 767 ? setisMobile(true) : setisMobile(false);
    };
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const servicePadding = isMobile ? '' : 'pe-5';
  const serviceWidth = isTablet ? 7 : 8;
  const emailFormWidth = isTablet ? 5 : 4;

  return (
    <div className='services-background'>
      <div className='services-header-image'>
        <PageHeader title='서비스' />
      </div>

      <Container className='my-5'>
        <Row>
          <Col md={serviceWidth} className={servicePadding}>
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
          <Col md={emailFormWidth}>
            <EmailForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;