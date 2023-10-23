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
    setShowContactForm(false);
    setShowFormSuccess(true);

    console.log("Contact form sent");

  };

  return (
    <div>
      <h5>Schedule A Consultation</h5>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>
            Name
            <input 
              type='text' 
              name='name' 
              id='name' 
              required={true} 
              autoComplete='off' 
            />
          </label>

          <label htmlFor='email'>
            Email
            <input 
              type='email' 
              name='email' 
              id='email' 
              required={true} 
              autoComplete="off" 
            />
          </label>

          <label htmlFor='subject'>
            Subject
            <input 
              type='text' 
              name='subject' 
              id='subject' 
              required={true} 
              autoComplete="off" 
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
    </div>
  )
};

export default ContactForm;