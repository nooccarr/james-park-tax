import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Stack from 'react-bootstrap/Stack';
const SUBJECTS = ['--Please choose an option--', '사업체 세금 보고', '개인 세금 보고', '은퇴연금', 'Medicare 건강보험', '저축보험', 'Other'];
import '../styles/email-form.css';

const EmailForm = () => {
  const form = useRef(null);

  const [ formValues, setFormValues ] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [ showFormSuccess, setShowFormSuccess ] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name') ?? '',
      email: formData.get('email') ?? '',
      subject: formData.get('subject') ?? '',
      message: formData.get('message') ?? ''
    };
    setFormValues(data);

    console.log('USEREF FORM CURRENT:', form.current);

    // TODO:
    // - send email
    // - setRecords([...records, { ...formValues, id: uuidv4() }]);

    emailjs.sendForm('', '', form.current, '')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setShowFormSuccess(true);
    console.log("Email form sent");
  };

  return (
    <aside className='pb-5'>{ console.log(formValues)}
        <Stack className='py-4 text-center' style={{ backgroundColor: '#043A49', borderBottom: '3px solid #AA9465'}}>
          <div className='px-2'>
            <h4 className='email-form-h4'>이메일로 문의하기</h4>
            <h5 className='email-form-h5'>Fill out the form below to e-mail us.</h5>
          </div>
      </Stack>{ console.log(formValues)}

        <div className='p-3 border email-form-form'>
          {!showFormSuccess ? (
            <form ref={form} onSubmit={sendEmail}>
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
                  style={{ borderRadius: '0px' }}
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
                  style={{ borderRadius: '0px' }}
                  required
                />

                <label htmlFor='subject'>
                  Subject
                </label>
                <select
                  name='subject'
                  id='subject'
                  className='form-control'
                  style={{ borderRadius: '0px', color: '#6A6A6A' }}
                  required
                >
                  {SUBJECTS.map((subject, idx) => (
                    <option
                      key={subject}
                      value={idx === 0 ? '' : subject}
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
                  style={{ borderRadius: '0px' }}
                />

                <button className='mt-2 email-form-button'>send</button>
              </Stack>
            </form>
          ) : (
            <h3 className='pt-3 pb-5 text-center'>Thank you for your message. It has been sent.</h3>
          )}
        </div>

      </aside>
  );
};

export default EmailForm;