import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCalendar, faC } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";

const Home = () => {
  const [ showContactForm, setShowContactForm ] = useState(false);
  const [ showFormSuccess, setShowFormSuccess ] = useState(false);
  
  return (
    <div>
      <h2>Home</h2>
      <p>
        James Park Tax & Accounting is a full-service accounting firm serving clients throughout the area, dedicated to providing our clients with professional, personalized services and guidance in a wide range of financial and business needs.
      </p>

      {!showFormSuccess && (
        <button
          onClick={() => setShowContactForm(true)}
        >        
          <h3>
            <FontAwesomeIcon icon={faCalendar} />   
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
        {/* <ContactForm 
          setShowContactForm={setShowContactForm}
          setShowFormSuccess={setShowFormSuccess} 
        /> */}

      {showFormSuccess && <h3>Thank you for your submission!</h3>}
    </div>
  );
};

export default Home;