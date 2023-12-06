import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PageHeader = ({ title }) => {
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    const onWindowResize = () => {
      window.innerWidth <= 767 ? setisMobile(true) : setisMobile(false);
    };
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  const mobile = isMobile ? 'text-center' : '';

  return (
    <Container as='section' className='py-5'>
      <Row className={`ps-2 py-5 ${mobile}`}>
        <Col className='p-0' style={{ color: '#FFF9D1', fontSize: '3em', fontWeight: 500 }}>{title}</Col>
      </Row>
    </Container>
  );
};

export default PageHeader;