import { useState } from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ContactForm = ({ setShowContactForm, setShowFormSuccess }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name') ?? '',
      email: formData.get('email') ?? '',
      subject: formData.get('subject') ?? '',
      message: formData.get('message') ?? ''
    };
    setFormValues(data);
    // TODO:
    // - send email
    // - setRecords([...records, { ...formValues, id: uuidv4() }]);
    setShowContactForm(false);
    setShowFormSuccess(true);

    console.log("Contact form sent");

  };

  return (
    <section>
      <Container>
        <Row>
          <Col>
            <h5>Schedule A Consultation</h5>
          </Col>
          <Col>
            <Link onClick={() => setShowContactForm(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </Link>
          </Col>
        </Row>

        <div>
          <form onSubmit={handleSubmit}>
            <Row>
              <label htmlFor='name'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                autoComplete='off'
                required
              />
            </Row>
            <Row>
              <label htmlFor='email'>
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                autoComplete="off"
                required
              />
            </Row>
            <Row>
              <label htmlFor='subject'>
                Subject
              </label>
              <input
                type='text'
                name='subject'
                id='subject'
                autoComplete="off"
                required
              />
            </Row>
            <Row>
              <label htmlFor='message'>
                Message
              </label>
              <textarea
                name='message'
                id='message'
                autoComplete="off"
              />
            </Row>
            <Row>
              <button>Schedule A Consultation</button>
            </Row>
          </form>
        </div>
      </Container>
    </section>
  )
};

export default ContactForm;