import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { faClock, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import EmailForm from "./EmailForm";
import PageHeader from './PageHeader';

const ContactUs = () => {
  const [location, setLocation] = useState('new-york-office');

  const handleLocation = (e) => {
    setLocation(e.target.innerText.toLowerCase().split(' ').join('-'));
  };

  return (
    <>
      <div>
        <PageHeader title='Contact Us' />
      </div>

      <Container>
        <Row>
          <Col>
            <main>
              <ButtonGroup className='pb-3'>
                <Button onClick={handleLocation} variant='secondary'>NEW YORK OFFICE</Button>
                <Button onClick={handleLocation} variant='secondary'>NEW JERSEY OFFICE</Button>
              </ButtonGroup>


              {location === 'new-york-office' ? (
                <section>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12088.22206060176!2d-73.8026996!3d40.7608037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c261502c1e2cf7%3A0x8f3b1894cd7e0382!2zSmFtZXMgUGFyayBUYXggJiBBY2NvdW50aW5nLCBJbmMuICjtmozqs4TrspXsnbgp!5e0!3m2!1sen!2sus!4v1698084181313!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  >
                  </iframe>
                  <Container>
                    <Row xs='auto'>
                      <Col>
                        <span>
                          <FontAwesomeIcon icon={faLocationDot} />
                        </span>
                      </Col>
                      <Col>
                        <address>
                          163-10 Northern Boulevard, #311<br/>
                          Flushing, NY 11358
                        </address>
                      </Col>
                    </Row>
                    <Row xs='auto'>
                      <Col>
                        <span>
                          <FontAwesomeIcon icon={faPhone} />
                        </span>
                      </Col>
                      <Col>
                        <p>
                          <a href="tel:+7183591098">(718) 359-1098</a>
                        </p>
                      </Col>
                    </Row>
                    <Row xs='auto'>
                      <Col>
                        <span>
                          <FontAwesomeIcon icon={faClock} />
                        </span>
                      </Col>
                      <Col>
                        <p>Mon - Fri : 9 AM - 6 PM EST</p>
                      </Col>
                    </Row>
                  </Container>
                </section>
              ): (
                <section>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317.27360008062965!2d-74.00572083325287!3d40.840434243643735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f70b3b69f52b%3A0x3fe2c115711b0927!2s725%20Grand%20Ave%2C%20Ridgefield%2C%20NJ%2007657!5e0!3m2!1sen!2sus!4v1698263388796!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                  <Container>
                    <Row xs='auto'>
                      <Col>
                        <span>
                          <FontAwesomeIcon icon={faLocationDot} />
                        </span>
                      </Col>
                      <Col>
                        <address>
                          725 Grand Avenue, #301<br/>
                          Ridgefield, NJ 07657
                        </address>
                      </Col>
                    </Row>
                    <Row xs='auto'>
                      <Col>
                        <span>
                          <FontAwesomeIcon icon={faPhone} />
                        </span>
                      </Col>
                      <Col>
                        <p>
                          <a href="tel:+2016253060">(201) 625-3060</a>
                        </p>
                      </Col>
                    </Row>
                    <Row xs='auto'>
                      <Col>
                        <span>
                          <FontAwesomeIcon icon={faClock} />
                        </span>
                      </Col>
                      <Col>
                        <p>Mon - Fri : 9 AM - 6 PM EST</p>
                      </Col>
                    </Row>
                  </Container>
                </section>
              )}
            </main>
          </Col>
          <Col>
            <EmailForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;