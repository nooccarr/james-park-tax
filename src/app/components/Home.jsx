import { useEffect, useState } from 'react';
// import div from "react-bootstrap/div";
// import div from "react-bootstrap/div";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm';
import LandingImgOne from '../images/landing-1.jpg';
import LandingImgTwo from '../images/landing-2.jpg';
import { Carousel } from 'react-responsive-carousel';
import '../styles/home.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showFormSuccess, setShowFormSuccess] = useState(false);
  // const [isMobile, setisMobile] = useState(false);

  // useEffect(() => {
  //   window.innerWidth <= 767 ? setisMobile(true) : setisMobile(false);
  //   const onWindowResize = () => {
  //     window.innerWidth <= 767 ? setisMobile(true) : setisMobile(false);
  //   };
  //   window.addEventListener('resize', onWindowResize);
  //   return () => window.removeEventListener('resize', onWindowResize);
  // }, []);

  // useEffect(() => {
  //   window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  // }, []);

  const handleCloseButtonClick = () => {
    setShowContactForm(false);
  };

  const handleButtonClick = () => {
    setShowContactForm(true);
    setShowFormSuccess(false);
  };

  return (
    <main>
      <Carousel autoPlay interval="10000" infiniteLoop showThumbs={false}>
        <div>
          <img className="brightness-90" src={LandingImgOne} />
          <button
            onClick={handleButtonClick}
            className="absolute top-[70%] left-[50%] text-4xl font-semibold home-contact-form-button"
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <h2 className="mb-0">
              <FontAwesomeIcon className="pe-2" icon={faCalendarDays} />
              Schedule a Consultation
            </h2>
          </button>
        </div>

        <div>
          <img className="brightness-90" src={LandingImgTwo} />
          <div
            className="absolute top-[70%] left-[50%] text-4xl font-semibold flex flex-col gap-4"
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <h1 className="home-carousel-h1">
              한국거주 영주권, 시민권자 세금보고
            </h1>
            <h1 className="home-carousel-h1">증여, 상속세, 양도세 상담</h1>
            <h1 className="home-carousel-h1">메디케어 건강보험 안내</h1>
          </div>
        </div>
      </Carousel>

      {/* <div>
            {showContactForm && (
              <ContactForm
                showContactForm={showContactForm}
                handleCloseButtonClick={handleCloseButtonClick}
                setShowFormSuccess={setShowFormSuccess}
              />
            )}

            {!showFormSuccess ? (
              <>

              </>
            ) : (
              <>
                <h2 className="form-submit-message">
                  Thank you for your submission!
                </h2>
                <div className="my-4 py-4">&nbsp;</div>
              </>
            )}
          </div> */}
    </main>
  );
};

export default Home;
