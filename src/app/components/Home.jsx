import { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Stack from 'react-bootstrap/Stack';
import Ratio from "react-bootstrap/Ratio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";
import LandingImg from '../images/landing.jpg';

const Home = () => {
  const [ showContactForm, setShowContactForm ] = useState(false);
  const [ showFormSuccess, setShowFormSuccess ] = useState(false);

  const handleButtonClick = () => {
    setShowContactForm(true);
    setShowFormSuccess(false);
  };

  return (
    <main>
      <Ratio aspectRatio='16x9'>
        <img src={LandingImg} alt='' />
      </Ratio>

      <Stack className='col-md-4 mx-auto'>
        {!showContactForm ? (
          <>
            <div className='p-2 mx-auto'>한국거주 영주권, 시민권자 세금보고</div>
            <div className='p-2 mx-auto'>증여, 상속세, 양도세 상담</div>
            <div className='p-2 mx-auto'>메디케어 건강보험 안내</div>
            <button onClick={handleButtonClick}>
              <h3>
                <FontAwesomeIcon icon={faCalendarDays} />
                Schedule A Consultation
              </h3>
            </button>
          </>
        ) : (
          <ContactForm
            setShowContactForm={setShowContactForm}
            setShowFormSuccess={setShowFormSuccess}
          />
        )}

        {showFormSuccess &&
          <h3>Thank you for your submission!</h3>
        }
      </Stack>
    </main>
  );
};

export default Home;