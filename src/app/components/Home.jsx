import { useEffect, useState } from "react";
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
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    window.innerWidth <= 767 ? setisMobile(true) : setisMobile(false);
    const onWindowResize = () => {
      window.innerWidth <= 767 ? setisMobile(true) : setisMobile(false);
    };
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handleCloseButtonClick = () => {
    setShowContactForm(false);
  };

  const handleButtonClick = () => {
    setShowContactForm(true);
    setShowFormSuccess(false);
  };

  const scheduleButtonClass = isMobile ? 'home-contact-form-button-mobile' : 'home-contact-form-button';

  return (
    <main>
      <Carousel interval='10000' fade>
        <Carousel.Item>
          {isMobile ? (
            <img src={LandingImgOne} width='767px' alt='' />
          ): (
            <Ratio aspectRatio='16x9'>
              <img src={LandingImgOne} alt='' />
            </Ratio>
          )}
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
                  <button onClick={handleButtonClick} className={scheduleButtonClass}>
                    <h2 className='mb-0'>
                      <FontAwesomeIcon className='pe-2' icon={faCalendarDays} />
                      Schedule a Consultation
                    </h2>
                  </button>
                  <div className='my-4 py-4'>&nbsp;</div>
                </>
              ): (
                <>
                  <h2 className='form-submit-message'>Thank you for your submission!</h2>
                  <div className='my-4 py-4'>&nbsp;</div>
                </>
              )
            }
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          {isMobile ? (
            <img src={LandingImgTwo} alt='' width='767px' />
          ) : (
            <Ratio aspectRatio='16x9'>
              <img src={LandingImgTwo} alt='' />
            </Ratio>
          )}
          <Carousel.Caption>
            {isMobile ? (
              <>
                <h1 className='home-carousel-h1'>한국거주 영주권,</h1>
                <h1 className='home-carousel-h1'>시민권자 세금보고</h1>
              </>
            ) : (
              <h1 className='home-carousel-h1'>한국거주 영주권, 시민권자 세금보고</h1>
            )}
            <h1 className='home-carousel-h1'>증여, 상속세, 양도세 상담</h1>
            <h1 className='home-carousel-h1'>메디케어 건강보험 안내</h1>
            <div className='my-4 py-4'>&nbsp;</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </main>
  );
};

export default Home;