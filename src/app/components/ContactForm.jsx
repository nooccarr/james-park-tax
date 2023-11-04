import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';

const ContactForm = ({ showContactForm, handleCloseButtonClick, setShowFormSuccess }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();


    // TODO:
    // - send email
    // - setRecords([...records, { ...formValues, id: uuidv4() }]);
    handleCloseButtonClick();
    setShowFormSuccess(true);

    console.log("Contact form sent");

  };

  return (
    <Modal show={showContactForm} onHide={handleCloseButtonClick} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>Schedule A Consultation</Modal.Title>
      </Modal.Header>{ console.log(formValues)}
        <form onSubmit={handleSubmit}>
        <Modal.Body>
          <Stack>
            <label htmlFor='name'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              autoComplete='off'
              required
              className='form-control'
              value={formValues.name}
              onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
            />
            {/* <div className='valid-feedback'>Gooood</div> */}

            <label htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              autoComplete="off"
              required
              className='form-control'
              value={formValues.email}
              onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
            />

            <label htmlFor='subject'>
              Subject
            </label>
            <input
              type='text'
              name='subject'
              id='subject'
              autoComplete="off"
              required
              className='form-control'
              value={formValues.subject}
              onChange={(e) => setFormValues({ ...formValues, subject: e.target.value })}
            />

            <label htmlFor='message'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              autoComplete="off"
              className='form-control'
              value={formValues.message}
              onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
            />
          </Stack>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleSubmit}>Schedule A Consultation</button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default ContactForm;