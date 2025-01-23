import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  const today = new Date();

  const newYorkOffice = (
    <>
      <div className="footer-location-title">New York</div>
      <div className="footer-location-address">163-10 Northern Blvd, #311</div>
      <div className="pb-5 footer-location-address">Flushing, NY 11358</div>
    </>
  );

  const newJerseyOffice = (
    <>
      <div className="footer-location-title">New Jersey</div>
      <div className="footer-location-address">725 Grand Ave, #301</div>
      <div className="pb-5 footer-location-address">Ridgefield, NJ 07657</div>
    </>
  );

  return (
    <footer className="px-5 md:px-10 pt-10 pb-20">
      <div className="max-w-[1280px] mx-auto">
        <>
          <div className="text-center pb-2">
            <div className="footer-location">LOCATIONS</div>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:gap-20 md:pb-10">
            <div className="text-center">{newYorkOffice}</div>

            <div className="text-center">{newJerseyOffice}</div>
          </div>
        </>
        <div className="tracking-tight">
          <div className="flex flex-wrap justify-center gap-1">
            <div className="text-center copyright-text">
              For general inquiries call
            </div>
            <div className="text-center copyright-text">
              718-359-1096 / 201-625-3060
            </div>
          </div>

          <div className="text-center copyright-text">
            &copy; {today.getFullYear()} James Park Tax & Accounting,
            Inc.&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to="/terms-and-conditions">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
