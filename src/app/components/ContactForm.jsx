import { useState } from 'react';
// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';

const ContactForm = ({
  showContactForm,
  handleCloseButtonClick,
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
    handleCloseButtonClick();
    setShowFormSuccess(true);

    console.log('Contact form sent');
  };

  // console.log(formValues);

  return (
    <div
      show={showContactForm}
      onHide={handleCloseButtonClick}
      animation={true}
    >
      <div.Header closeButton>
        <div.Title>Schedule a Consultation</div.Title>
      </div.Header>
      <form onSubmit={handleSubmit}>
        <div.Body>
          <div>
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
          </div>
        </div.Body>
        <div.Footer>
          <button onClick={handleSubmit}>Schedule a Consultation</button>
        </div.Footer>
      </form>
    </div>
  );
};

export default ContactForm;
