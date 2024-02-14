import { useState, useEffect } from 'react';
// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';
import '../styles/footer.css';

const Footer = () => {
  // const [isMobile, setisMobile] = useState(false);

  // useEffect(() => {
  //   window.innerWidth <= 767 ? setisMobile(true) : setisMobile(false);
  //   const onWindowResize = () => {
  //     window.innerWidth <= 767 ? setisMobile(true) : setisMobile(false);
  //   };
  //   window.addEventListener('resize', onWindowResize);
  //   return () => window.removeEventListener('resize', onWindowResize);
  // }, []);

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
        <>
          <div className="text-center pt-5 pb-2">
            <div className="footer-location">LOCATIONS</div>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:gap-20">
            <div className="text-center">{newYorkOffice()}</div>

            <div className="text-center">{newJerseyOffice()}</div>
          </div>
        </>

        <div className="flex flex-wrap justify-center gap-1">
          <div className="pb-2 text-center copyright-text">
            For general inquiries call
          </div>
          <div className="pb-2 text-center copyright-text">
            718-359-1096 / 201-625-3060
          </div>
        </div>

        <div className="pb-5 text-center copyright-text">
          &copy; {today.getFullYear()} James Park Tax & Accounting, Inc.
        </div>
        <div className="pb-2">&nbsp;</div>
      </div>
    </footer>
  );
};

export default Footer;
