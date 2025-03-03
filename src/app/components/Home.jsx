import { useState } from 'react';
import useScrollToTop from '../hooks/useScrollToTop';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm';
import LandingImgOne from '../images/landing-1.jpg';
import LandingImgOneMedium from '../images/landing-1-md.jpg';
import LandingImgOneSmall from '../images/landing-1-sm.jpg';
import LandingImgTwo from '../images/landing-2.jpg';
import LandingImgTwoMedium from '../images/landing-2-md.jpg';
import LandingImgTwoSmall from '../images/landing-2-sm.jpg';
import { Carousel } from 'react-responsive-carousel';
import '../styles/home.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showFormSuccess, setShowFormSuccess] = useState(false);

  useScrollToTop();

  const handleContactFormOpen = () => {
    setShowContactForm(true);
    document.body.classList.add('no-scroll');
  };

  const handleContactFormClose = () => {
    setShowContactForm(false);
    document.body.classList.remove('no-scroll');
  };

  const handleButtonClick = () => {
    handleContactFormOpen();
    setShowFormSuccess(false);
  };

  return (
    <main className="animate-fadeIn select-none">
      <Carousel
        autoPlay
        interval="10000"
        infiniteLoop
        emulateTouch
        showThumbs={false}
        showArrows={false}
        showStatus={false}
      >
        <div>
          <div className="min-h-[500px] aspect-video">
            <img
              className="brightness-90 w-full h-full object-cover"
              src={LandingImgOne}
              fetchpriority="high"
              srcSet={`${LandingImgOneSmall} 500w, ${LandingImgOneMedium} 1000w, ${LandingImgOne} 1500w`}
              sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 1500px"
              loading="eager"
              alt="Skyline of lower Manhattan, New York City at dusk, featuring the One World Trade Center and illuminated buildings reflecting in the water."
            />
          </div>

          {!showFormSuccess ? (
            <button
              onClick={handleButtonClick}
              className="absolute top-[50%] md:top-[70%] left-[50%] text-md md:text-xl font-semibold home-contact-form-button p-3 md:p-5 min-w-[222px]"
              style={{ transform: 'translate(-50%, -50%)' }}
            >
              <h2 className="">
                <FontAwesomeIcon className="pe-2" icon={faCalendarDays} />
                Schedule a Consultation
              </h2>
            </button>
          ) : (
            <h2
              className="form-submit-message absolute top-[50%] md:top-[70%] left-[50%] min-w-[222px]"
              style={{ transform: 'translate(-50%, -50%)' }}
            >
              Thank you for your message.
              <br />
              It has been sent.
            </h2>
          )}
        </div>

        <div>
          <div className="min-h-[500px] aspect-video">
            <img
              className="brightness-90 w-full h-full object-cover"
              src={LandingImgTwo}
              fetchpriority="high"
              srcSet={`${LandingImgTwoSmall} 500w, ${LandingImgTwoMedium} 1000w, ${LandingImgTwo} 1500w`}
              sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 1500px"
              loading="eager"
              alt="Close-up of two people shaking hands across a wooden table, symbolizing agreement or partnership."
            />
          </div>
          <div
            className="absolute top-[50%] md:top-[70%] left-[50%] w-full text-lg md:text-3xl font-semibold flex flex-col md:gap-4"
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

      <ContactForm
        showContactForm={showContactForm}
        handleContactFormClose={handleContactFormClose}
        setShowFormSuccess={setShowFormSuccess}
      />
    </main>
  );
};

export default Home;
