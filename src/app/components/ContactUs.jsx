import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import EmailForm from "./EmailForm";

const ContactUs = () => {
  return (
    <>
      <div>
        <h2>Contact Us</h2>
      </div>
      <main>
        <p>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          jamesparktax@gmail.com
        </p>
        <section>
          <address>
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            163-10 Northern Boulevard, #311<br/>
            Flushing, NY 11358<br/>
            <p>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <a href="tel:+7183591098">(718) 359-1098</a>
            </p>
          </address>
          <p>
            <span>
              <FontAwesomeIcon icon={faClock} />
            </span>
            Mon - Fri: 9 AM - 6 PM EST
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12088.22206060176!2d-73.8026996!3d40.7608037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c261502c1e2cf7%3A0x8f3b1894cd7e0382!2zSmFtZXMgUGFyayBUYXggJiBBY2NvdW50aW5nLCBJbmMuICjtmozqs4TrspXsnbgp!5e0!3m2!1sen!2sus!4v1698084181313!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </section>
        <section>
          <address>
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            725 Grand Avenue, #301<br/>
            Ridgefield, NJ 07657<br/>
            <p>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <a href="tel:+2016253060">(201) 625-3060</a>
            </p>
          </address>
          <p>
            <span>
              <FontAwesomeIcon icon={faClock} />
            </span>
            Mon - Fri: 9 AM - 6 PM EST
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317.27360008062965!2d-74.00572083325287!3d40.840434243643735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f70b3b69f52b%3A0x3fe2c115711b0927!2s725%20Grand%20Ave%2C%20Ridgefield%2C%20NJ%2007657!5e0!3m2!1sen!2sus!4v1698263388796!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>

      <EmailForm />
    </>
  );
};

export default ContactUs;