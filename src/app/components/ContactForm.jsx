import { useState } from 'react';

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
      <h5>Schedule A Consultation</h5>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>
            Name
            <input
              type='text'
              name='name'
              id='name'
              autoComplete='off'
              required
            />
          </label>

          <label htmlFor='email'>
            Email
            <input
              type='email'
              name='email'
              id='email'
              autoComplete="off"
              required
            />
          </label>

          <label htmlFor='subject'>
            Subject
            <input
              type='text'
              name='subject'
              id='subject'
              autoComplete="off"
              required
            />
          </label>

          <label htmlFor='message'>
            Message
            <textarea
              name='message'
              id='message'
              autoComplete="off"
            />
          </label>

          <button>Schedule A Consultation</button>
        </form>
      </div>
    </section>
  )
};

export default ContactForm;