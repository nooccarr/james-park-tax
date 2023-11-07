import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { faClock, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import EmailForm from "./EmailForm";
import PageHeader from './PageHeader';
import '../styles/contact-us.css';

const ContactUs = () => {
  const [location, setLocation] = useState('new-york-office');

  const handleLocation = (e) => {
    setLocation(e.target.innerText.toLowerCase().split(' ').join('-'));
  };

  return (
    <>
      <div className='contact-us-header-image'>
        <PageHeader title='Contact Us' />
      </div>

      <Container className='my-5'>
        <Row className='mb-5 pb-4'>
          <Col>
            <ButtonGroup className='mb-4 w-100'>
              <Button onClick={handleLocation} variant='secondary'>NEW YORK OFFICE</Button>
              <Button onClick={handleLocation} variant='secondary'>NEW JERSEY OFFICE</Button>
            </ButtonGroup>

            {location === 'new-york-office' ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12088.22206060176!2d-73.8026996!3d40.7608037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c261502c1e2cf7%3A0x8f3b1894cd7e0382!2zSmFtZXMgUGFyayBUYXggJiBBY2NvdW50aW5nLCBJbmMuICjtmozqs4TrspXsnbgp!5e0!3m2!1sen!2sus!4v1698084181313!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: '1px solid lightgrey' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
              </iframe>
              ): (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317.27360008062965!2d-74.00572083325287!3d40.840434243643735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f70b3b69f52b%3A0x3fe2c115711b0927!2s725%20Grand%20Ave%2C%20Ridgefield%2C%20NJ%2007657!5e0!3m2!1sen!2sus!4v1698263388796!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: '1px solid lightgrey' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col md={6}>

              <section>
                <Container>
                  <Row>
                    <h3 className='ps-0 pb-2 contact-us-office-title'>New York Office</h3>
                  </Row>
                  <Row xs='auto'>
                    <Col className='ps-0'>
                      <span>
                        <FontAwesomeIcon icon={faLocationDot} />
                      </span>
                    </Col>
                    <Col className='ps-0'>
                      <address className='mb-2'>
                        163-10 Northern Boulevard, #311<br/>
                        Flushing, NY 11358
                      </address>
                    </Col>
                  </Row>
                  <Row xs='auto'>
                    <Col className='ps-0'>
                      <span>
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                    </Col>
                    <Col className='ps-0'>
                      <p className='mb-2'>
                        <a href='tel:+1-718-359-1096'>(718) 359-1096</a>
                      </p>
                    </Col>
                  </Row>
                  <Row xs='auto'>
                    <Col className='ps-0'>
                      <span>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </Col>
                    <Col className='ps-0'>
                      <p className='mb-2'>jamesparktax@gmail.com</p>
                    </Col>
                  </Row>
                  <Row xs='auto'>
                    <Col className='ps-0'>
                      <span>
                        <FontAwesomeIcon icon={faClock} />
                      </span>
                    </Col>
                    <Col className='ps-0'>
                      <p className='mb-5'>Mon - Fri : 9 AM - 6 PM EST</p>
                    </Col>
                  </Row>
                </Container>
              </section>

              <section>
                <Container>
                  <Row>
                    <h3 className='ps-0 pb-2 contact-us-office-title'>New Jersey Office</h3>
                  </Row>
                  <Row xs='auto'>
                    <Col className='ps-0'>
                      <span>
                        <FontAwesomeIcon icon={faLocationDot} />
                      </span>
                    </Col>
                    <Col className='ps-0'>
                      <address className='mb-2'>
                        725 Grand Avenue, #301<br/>
                        Ridgefield, NJ 07657
                      </address>
                    </Col>
                  </Row>
                  <Row xs='auto'>
                    <Col className='ps-0'>
                      <span>
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                    </Col>
                    <Col className='ps-0'>
                      <p className='mb-2'>
                        <a href="tel:+1-201-625-3060">(201) 625-3060</a>
                      </p>
                    </Col>
                  </Row>
                  <Row xs='auto'>
                    <Col className='ps-0'>
                      <span>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </Col>
                    <Col className='ps-0'>
                      <p className='mb-2'>jamesparktax@gmail.com</p>
                    </Col>
                  </Row>
                  <Row xs='auto'>
                    <Col className='ps-0'>
                      <span>
                        <FontAwesomeIcon icon={faClock} />
                      </span>
                    </Col>
                    <Col className='ps-0'>
                      <p className>Mon - Fri : 9 AM - 6 PM EST</p>
                    </Col>
                  </Row>
                </Container>
              </section>

          </Col>
          <Col md={6}>
            <EmailForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;