import { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import CloseButton from 'react-bootstrap/CloseButton';

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
      <Stack direction='horizontal'>
        <div className='p-2'>
          <h5>Schedule A Consultation</h5>
        </div>
        <div className='p-2 ms-auto'>
          <CloseButton onClick={() => setShowContactForm(false)} />
        </div>
      </Stack>

      <div className='p-2'>
        <form onSubmit={handleSubmit}>
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
            />

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

            <label htmlFor='message'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              autoComplete="off"
            />

            <button className='mt-2'>Schedule A Consultation</button>
          </Stack>
        </form>
      </div>
    </section>
  )
};

export default ContactForm;