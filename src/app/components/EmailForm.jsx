import { useRef, useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
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
    <aside>
        <Stack>
          <div className='p-2'>
            <h3>Fill out the form below to e-mail us.</h3>
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
                autoComplete="off"
                value={formValues.name}
                onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
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
                value={formValues.email}
                onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                required
              />

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

              <Button className='mt-2'>Send</Button>
            </Stack>
          </form>

          {showFormSuccess && <h3>Thank you for your message. It has been sent.</h3>}
        </div>

      </aside>
  );
};

export default EmailForm;