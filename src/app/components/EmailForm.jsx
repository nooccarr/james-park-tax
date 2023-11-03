import { useRef, useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
const SUBJECTS = ['--Please choose an option--', '사업체 세금 보고', '개인 세금 보고', '은퇴연금', 'Medicare 건강보험', '저축보험', 'Other'];
import '../styles/email-form.css';

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
    <aside className='pb-5'>
        <Stack className='py-4 text-center rounded-top' style={{ backgroundColor: '#043A49', borderBottom: '3px solid #AA9465'}}>
          <div className='px-2'>
            <h4 className='email-form-h4'>이메일로 문의하기</h4>
            <h5 className='email-form-h5'>Fill out the form below to e-mail us.</h5>
          </div>
        </Stack>

        <div className='p-3 text-center border rounded-bottom'>
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
                className='form-control'
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
                className='form-control'
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
                className='form-control'
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
                className='form-control'
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