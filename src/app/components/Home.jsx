import { useState } from "react";
import Ratio from "react-bootstrap/Ratio";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";
import LandingImg from '../images/landing.jpg';

const Home = () => {
  const [ showContactForm, setShowContactForm ] = useState(false);
  const [showFormSuccess, setShowFormSuccess] = useState(false);

  const handleCloseButtonClick = () => {
    setShowContactForm(false);
  };

  const handleButtonClick = () => {
    setShowContactForm(true);
    setShowFormSuccess(false);
  };

  return (
    <main>
      <Carousel>

          <Carousel.Item>
            <Ratio aspectRatio='16x9'>
              <img src={LandingImg} alt='' />
            </Ratio>
            <Carousel.Caption>
              <h3 className='p-2'>한국거주 영주권, 시민권자 세금보고</h3>
              <h3 className='p-2'>증여, 상속세, 양도세 상담</h3>
              <h3 className='p-2 mb-4'>메디케어 건강보험 안내</h3>





              {showContactForm && (
                <ContactForm
                  showContactForm={showContactForm}
                  handleCloseButtonClick={handleCloseButtonClick}
                  setShowFormSuccess={setShowFormSuccess}
                />
              )}

            {!showFormSuccess ? (
                <Button onClick={handleButtonClick} className='mb-5'>
                  <h3>
                    <FontAwesomeIcon className='pe-2' icon={faCalendarDays} />
                    Schedule A Consultation
                  </h3>
                </Button>
              ): (
                <div className='py-2'>
                  <h3 className='mb-5'>Thank you for your submission!</h3>
                </div>
              )
            }


            </Carousel.Caption>
          </Carousel.Item>

      </Carousel>
    </main>
  );
};

export default Home;