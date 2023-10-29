import { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const SUBJECTS = ['--Please choose an option--', 'Tax Preparation', 'Tax Planning', 'Accounting', 'Other'];

const EmailForm = () => {
  const [ formValues, setFormValues ] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [ showFormSuccess, setShowFormSuccess ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO:
    // - send email
    // - setRecords([...records, { ...formValues, id: uuidv4() }]);
    setFormValues({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setShowFormSuccess(true);
    console.log("Email form sent");
  };

  return (
    <Container>
      <aside>
        <Row>
          <div>
            <h3>Fill out the form below to e-mail us.</h3>
          </div>
        </Row>
        <form onSubmit={handleSubmit}>
          <Row>
            <label htmlFor='name'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              autoComplete="off"
              value={formValues.name}
              onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
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
              value={formValues.email}
              onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
              required
            />
          </Row>
          <Row>
            <label htmlFor='subject'>
              Subject
            </label>
            <select
              name='subject'
              id='subject'
              value={formValues.subject}
              onChange={(e) => setFormValues({ ...formValues, subject: e.target.value })}
              required
            >
              {SUBJECTS.map((subject, idx) => (
                <option
                  key={subject}
                  value={idx === 0 ? '' : subject}
                  disabled={idx === 0 ? true : false}
                >
                  {subject}
                </option>
              ))}
            </select>
          </Row>
          <Row>
            <label htmlFor='message'>
              Message (optional)
            </label>
            <textarea
              name='message'
              id='message'
              autoComplete="off"
              value={formValues.message}
              onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
            />
          </Row>
          <Row>
            <button>Send</button>
          </Row>
        </form>

        <Row>
          {showFormSuccess && <h3>Thank you for your message. It has been sent.</h3>}
        </Row>
      </aside>
    </Container>
  );
};

export default EmailForm;