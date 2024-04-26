import { useState } from 'react';
import Modal from 'react-modal';

const ContactForm = ({
  showContactForm,
  handleContactFormClose,
  setShowFormSuccess,
}) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO:
    // - send email
    // - setRecords([...records, { ...formValues, id: uuidv4() }]);
    handleContactFormClose();
    setShowFormSuccess(true);

    console.log('Contact form sent');
  };

  // console.log(formValues);

  return (
    <Modal
      isOpen={showContactForm}
      onRequestClose={handleContactFormClose}
      className="email-form-form flex flex-col w-[320px] mx-2"
      overlayClassName="fixed inset-0 z-10 flex justify-center items-center"
    >
      <div className="flex justify-between items-center p-5 text-center bg-[#043A49] border-b-[3px] border-[#AA9465]">
        <h2 className="text-[#fff9d1] font-semibold">
          Schedule a Consultation
        </h2>
        <div onClick={handleContactFormClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="h-5 w-5 hover:cursor-pointer"
            fill="#fff9d1"
          >
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </svg>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col p-5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            required
            className="form-control"
            value={formValues.name}
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
          />
          {/* <div className='valid-feedback'>Gooood</div> */}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            required
            className="form-control"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          />

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            autoComplete="off"
            required
            className="form-control"
            value={formValues.subject}
            onChange={(e) =>
              setFormValues({ ...formValues, subject: e.target.value })
            }
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            autoComplete="off"
            className="form-control"
            value={formValues.message}
            onChange={(e) =>
              setFormValues({ ...formValues, message: e.target.value })
            }
          />
          <button
            className="email-form-button normal-case"
            onClick={handleSubmit}
          >
            Schedule a Consultation
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ContactForm;
