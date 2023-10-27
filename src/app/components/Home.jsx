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
      <ul>
        <li>한국거주 영주권, 시민권자 세금보고</li>
        <li>증여, 상속세, 양도세 상담</li>
        <li>메디케어 건강보험 안내</li>
      </ul>

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