import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm';
import LandingImgOne from '../images/landing-1.jpg';
import LandingImgTwo from '../images/landing-2.jpg';
import { Carousel } from 'react-responsive-carousel';
import '../styles/home.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);
  const [showFormSuccess, setShowFormSuccess] = useState(false);

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  // TODO: work on navigation
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate('/login');
      }
      const { data } = await axios.post(
        'http://localhost:4000',
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: 'top-right',
          })
        : (removeCookie('token'), navigate('/login'));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie('token');
    navigate('/signup');
  };

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
          <div className="min-h-[500px] aspect-video">
            <img
              className="brightness-90 w-full h-full object-cover"
              src={LandingImgOne}
            />
          </div>
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
        </div>

        <div>
          <div className="min-h-[500px] aspect-video">
            <img
              className="brightness-90 w-full h-full object-cover"
              src={LandingImgTwo}
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

      {/* {showContactForm && (
      <ContactForm
        showContactForm={showContactForm}
        handleCloseButtonClick={handleCloseButtonClick}
        setShowFormSuccess={setShowFormSuccess}
      />
    )} */}

      {/* {!showFormSuccess ? (
          <div></div>
        ) : (
          <>
            <h2 className="form-submit-message">
              Thank you for your submission!
            </h2>
            <div className="my-4 py-4">&nbsp;</div>
          </>
        )} */}

      <>
        <div className="home_page">
          <h4>
            Welcome <span>{username}</span>
          </h4>
          <button onClick={Logout}>LOGOUT</button>
        </div>
        <ToastContainer />
      </>
    </main>
  );
};

export default Home;
