import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import div from "react-bootstrap/div";
// import div from "react-bootstrap/div";
// import div from "react-bootstrap/div";
// import div from "react-bootstrap/div";
// import div from "react-bootstrap/div";
import {
  faClock,
  faLocationDot,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import EmailForm from './EmailForm';
import PageHeader from './PageHeader';
import '../styles/contact-us.css';

const ContactUs = () => {
  const [location, setLocation] = useState('new-york-office');

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handleLocation = (e) => {
    setLocation(e.target.innerText.toLowerCase().split(' ').join('-'));
  };

  const locationURL =
    location === 'new-york-office'
      ? 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12088.22206060176!2d-73.8026996!3d40.7608037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c261502c1e2cf7%3A0x8f3b1894cd7e0382!2zSmFtZXMgUGFyayBUYXggJiBBY2NvdW50aW5nLCBJbmMuICjtmozqs4TrspXsnbgp!5e0!3m2!1sen!2sus!4v1698084181313!5m2!1sen!2sus'
      : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317.27360008062965!2d-74.00572083325287!3d40.840434243643735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f70b3b69f52b%3A0x3fe2c115711b0927!2s725%20Grand%20Ave%2C%20Ridgefield%2C%20NJ%2007657!5e0!3m2!1sen!2sus!4v1698263388796!5m2!1sen!2sus';

  const newYorkOfficeContactInfo = () => (
    <section>
      <div>
        <div>
          <h3 className="ps-0 pb-2 contact-us-office-title">New York Office</h3>
        </div>
        <div xs="auto">
          <div className="ps-0">
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
          </div>
          <div className="ps-0">
            <address className="mb-2">
              163-10 Northern Boulevard, #311
              <br />
              Flushing, NY 11358
            </address>
          </div>
        </div>
        <div xs="auto">
          <div className="ps-0">
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
          </div>
          <div className="ps-0">
            <p className="mb-2">
              <a href="tel:+1-718-359-1096">(718) 359-1096</a>
            </p>
          </div>
        </div>
        <div xs="auto">
          <div className="ps-0">
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </div>
          <div className="ps-0">
            <p className="mb-2">jamesparktax@gmail.com</p>
          </div>
        </div>
        <div xs="auto">
          <div className="ps-0">
            <span>
              <FontAwesomeIcon icon={faClock} />
            </span>
          </div>
          <div className="ps-0">
            <p className="mb-5">Mon - Fri : 9 AM - 6 PM EST</p>
          </div>
        </div>
      </div>
    </section>
  );

  const newJerseryOfficeContactInfo = () => (
    <section>
      <div>
        <div>
          <h3 className="ps-0 pb-2 contact-us-office-title">
            New Jersey Office
          </h3>
        </div>
        <div xs="auto">
          <div className="ps-0">
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
          </div>
          <div className="ps-0">
            <address className="mb-2">
              725 Grand Avenue, #301
              <br />
              Ridgefield, NJ 07657
            </address>
          </div>
        </div>
        <div xs="auto">
          <div className="ps-0">
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
          </div>
          <div className="ps-0">
            <p className="mb-2">
              <a href="tel:+1-201-625-3060">(201) 625-3060</a>
            </p>
          </div>
        </div>
        <div xs="auto">
          <div className="ps-0">
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </div>
          <div className="ps-0">
            <p className="mb-2">jamesparktax@gmail.com</p>
          </div>
        </div>
        <div xs="auto">
          <div className="ps-0">
            <span>
              <FontAwesomeIcon icon={faClock} />
            </span>
          </div>
          <div className="ps-0">
            <p className="mb-5">Mon - Fri : 9 AM - 6 PM EST</p>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <div className="services-header-image">
        <PageHeader title="Contact Us" />
      </div>

      <div className="my-5">
        <div className="mb-5 pb-4">
          <div>
            <div className="mb-4 w-100">
              <div onClick={handleLocation} variant="secondary">
                NEW YORK OFFICE
              </div>
              <div onClick={handleLocation} variant="secondary">
                NEW JERSEY OFFICE
              </div>
            </div>
            <iframe
              src={locationURL}
              width="100%"
              height="450"
              style={{ border: '1px solid lightgrey' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="mb-5">
          <div md={6}>
            {newYorkOfficeContactInfo()}
            {newJerseryOfficeContactInfo()}
          </div>
          <div md={6}>
            <EmailForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
