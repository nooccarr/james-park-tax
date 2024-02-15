import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import PageHeader from './PageHeader';
// import div from "react-bootstrap/div";
// import div from "react-bootstrap/div";
// import div from "react-bootstrap/div";
// import div from "react-bootstrap/div";
import InfoFooterImg from '../images/info-footer.png';
import '../styles/tax-info.css';

const TaxInfo = () => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
  //   const onWindowResize = () => {
  //     window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
  //   };
  //   window.addEventListener('resize', onWindowResize);
  //   return () => window.removeEventListener('resize', onWindowResize);
  // }, []);

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="tax-info-background">
      <div className="services-header-image">
        <PageHeader title="Tax 정보" />
      </div>

      <div className="max-w-[2240px] mx-auto">
        <div className="pt-20 pb-20 md:pb-40 mx-5 md:mx-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default TaxInfo;
