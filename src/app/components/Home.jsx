import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";

const Home = () => {
  const [ showContactForm, setShowContactForm ] = useState(false);
  const [ showFormSuccess, setShowFormSuccess ] = useState(false);

  return (
    <div>
      <h2>Home</h2>
      <p>Curabitur a vehicula tellus. Vivamus ac lorem viverra sem blandit mattis. Aliquam nibh augue, semper at consequat id, viverra sit amet tellus.</p>

      {!showFormSuccess && (
        <button
          onClick={() => setShowContactForm(true)}
        >
          <h3>
            <FontAwesomeIcon icon={faCalendarDays} />
            Schedule A Consultation
          </h3>
        </button>
      )}

      {showContactForm && (
        <ContactForm
          setShowContactForm={setShowContactForm}
          setShowFormSuccess={setShowFormSuccess}
        />
      )}

      {showFormSuccess && <h3>Thank you for your submission!</h3>}
    </div>
  );
};

export default Home;