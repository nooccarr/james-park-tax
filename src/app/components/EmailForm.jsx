import { useRef, useState } from 'react';
import { emailHelper } from '../helpers/emailHelper';
import { SUBJECTS } from '../data/emailSubjects';
import '../styles/email-form.css';

const EmailForm = () => {
  const form = useRef(null);

  const [showFormSuccess, setShowFormSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    try {
      emailHelper(form.current);
    } catch (error) {
      console.error(error);
    } finally {
      setShowFormSuccess(true);
    }
  };

  return (
    <aside className="pb-5 select-none">
      <div className="py-5 text-center bg-[#043A49] border-b-[3px] border-[#AA9465]">
        <div className="px-2">
          <h4 className="email-form-h4">이메일로 문의하기</h4>
          <h5 className="email-form-h5">
            Fill out the form below to e-mail us.
          </h5>
        </div>
      </div>

      <div className="p-4 border email-form-form">
        {!showFormSuccess ? (
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="from_name"
              id="name"
              autoComplete="off"
              className="form-control p-2 border-1 block w-full outline-none"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="reply_to"
              id="email"
              autoComplete="off"
              className="form-control p-2 border-1 block w-full outline-none"
              required
            />

            <label htmlFor="subject">Subject</label>
            <select
              name="subject"
              id="subject"
              className="form-control p-2 border-1 block w-full text-[#6A6A6A] outline-none"
              required
            >
              {SUBJECTS.map((subject, idx) => (
                <option key={subject} value={idx === 0 ? '' : subject}>
                  {subject}
                </option>
              ))}
            </select>

            <label htmlFor="message">Message (optional)</label>
            <textarea
              name="message"
              id="message"
              autoComplete="off"
              className="form-control p-2 min-h-40 max-h-96 border-1 block w-full outline-none"
            />

            <button className="mt-2 email-form-button w-full">send</button>
          </form>
        ) : (
          <h3 className="pt-3 pb-5 text-center">
            Thank you for your message. It has been sent.
          </h3>
        )}
      </div>
    </aside>
  );
};

export default EmailForm;
