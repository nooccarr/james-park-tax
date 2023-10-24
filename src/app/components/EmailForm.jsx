import { useRef, useState } from 'react';

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
    <div>
      <div>
        <h3>Fill out the form below to e-mail us.</h3>
      </div>
      <form
        onSubmit={handleSubmit}
      >
        <label htmlFor='name'>
          Name
          <input 
            type='text' 
            name='name' 
            id='name' 
            required={true} 
            autoComplete="off"
            value={formValues.name}
            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })} 
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
            value={formValues.email}
            onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
          />
        </label>

        <label htmlFor='subject'>
          Subject
          <select 
            name='subject' 
            id='subject' 
            defaultValue='' 
            required={true}
            value={formValues.subject}
            onChange={(e) => setFormValues({ ...formValues, subject: e.target.value })}
          >
            <option value='' disabled>--Please choose an option--</option>
            <option value='Tax Preparation'>Tax Preparation</option>
            <option value='Tax Planning'>Tax Planning</option>
            <option value='Accounting'>Accounting</option>
            <option value='Other'>Other</option>
          </select>
        </label>

        <label htmlFor='message'>
          Message (optional)
          <textarea 
            name='message' 
            id='message' 
            autoComplete="off"
            value={formValues.message}
            onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
          />
        </label>

        <button>Send</button>
      </form>

      {showFormSuccess && <h3>Thank you for your message. It has been sent.</h3>}
    </div>
  );
};

export default EmailForm;