import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import EmailForm from "./EmailForm";

const ContactUs = () => {
  return (
    <div>
      <div>
        <h2>Contact Us</h2>
      </div>
      <main>
        <address>
          <span>
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          163-10 Northern Blvd,<br/>
          Flushing, NY 11358<br/>
          <p>
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <a href="tel:+7183591098">(718) 359-1098</a>
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            jamesparktax@gmail.com
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
      </main>

      <EmailForm />
    </div>
  );
};

export default ContactUs;