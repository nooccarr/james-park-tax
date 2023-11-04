import { useState } from "react";
import Ratio from "react-bootstrap/Ratio";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";
import LandingImgOne from '../images/landing-1.jpg';
import LandingImgTwo from '../images/landing-2.jpg';
import '../styles/home.css';

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
      <Carousel interval='10000' fade>
          <Carousel.Item>
            <Ratio aspectRatio='16x9'>
              <img src={LandingImgOne} alt='' />
            </Ratio>
            <Carousel.Caption>
              {showContactForm && (
                <ContactForm
                  showContactForm={showContactForm}
                  handleCloseButtonClick={handleCloseButtonClick}
                  setShowFormSuccess={setShowFormSuccess}
                />
              )}

              {!showFormSuccess ? (
                  <>
                    <button onClick={handleButtonClick} className='home-contact-form-button'>
                      <h2 className='mb-0'>
                        <FontAwesomeIcon className='pe-2' icon={faCalendarDays} />
                        Schedule A Consultation
                      </h2>
                    </button>
                    <div className='my-5 py-5'>&nbsp;</div>
                    {/* <div style={{ position:S 'absolute', top: '50%', transform: 'translate(0, -50%)'}}>&nbsp;</div> */}
                  </>
                ): (
                  <div className='py-2'>
                    <h3 className='mb-5'>Thank you for your submission!</h3>
                  </div>
                )
              }
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Ratio aspectRatio='16x9'>
            <img src={LandingImgTwo} alt='' />
          </Ratio>
          <Carousel.Caption>
            <h1>한국거주 영주권, 시민권자 세금보고</h1>
            <h1>증여, 상속세, 양도세 상담</h1>
            <h1 className='mb-5'>메디케어 건강보험 안내</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </main>
  );
};

export default Home;