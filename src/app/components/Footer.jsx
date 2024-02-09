import { useState, useEffect } from 'react';
// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';
import '../styles/footer.css';

const Footer = () => {
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    window.innerWidth <= 767 ? setisMobile(true) : setisMobile(false);
    const onWindowResize = () => {
      window.innerWidth <= 767 ? setisMobile(true) : setisMobile(false);
    };
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  const today = new Date();

  const newYorkOffice = () => (
    <>
      <div className="footer-location-title">New York</div>
      <div className="footer-location-address">163-10 Northern Blvd</div>
      <div className="pb-5 footer-location-address">Flushing, NY 11358</div>
    </>
  );

  const newJerseyOffice = () => (
    <>
      <div className="footer-location-title">New Jersey</div>
      <div className="footer-location-address">725 Grand Ave</div>
      <div className="pb-5 footer-location-address">Ridgefield, NJ 07657</div>
    </>
  );

  return (
    <footer>
      <div>
        {isMobile ? (
          <>
            <div className="pt-5 pb-2">
              <div className="text-center">
                <div className="footer-location">LOCATIONS</div>
              </div>
            </div>
            <div>
              <div className="text-center">{newYorkOffice()}</div>
            </div>
            <div>
              <div className="text-center">{newJerseyOffice()}</div>
            </div>
          </>
        ) : (
          <>
            <div className="pt-5 pb-2">
              <div md={{ offset: 3, span: 3 }}>
                <div className="footer-location">LOCATIONS</div>
              </div>
            </div>
            <div className="mb-5">
              <div md={{ offset: 3, span: 3 }}>{newYorkOffice()}</div>
              <div md={{ span: 3 }}>{newJerseyOffice()}</div>
            </div>
          </>
        )}

        {isMobile ? (
          <>
            <div className="pb-2 text-center copyright-text">
              For general inquiries call
            </div>
            <div className="pb-2 text-center copyright-text">
              718-359-1096 / 201-625-3060
            </div>
          </>
        ) : (
          <div className="pb-2 text-center copyright-text">
            For general inquiries call 718-359-1096 / 201-625-3060
          </div>
        )}

        <div className="pb-5 text-center copyright-text">
          &copy; {today.getFullYear()} James Park Tax & Accounting, Inc.
        </div>
        <div className="pb-2">&nbsp;</div>
      </div>
    </footer>
  );
};

export default Footer;
