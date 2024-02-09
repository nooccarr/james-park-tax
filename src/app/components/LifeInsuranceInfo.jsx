import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
// import div from "react-bootstrap/div";
// import div from "react-bootstrap/div";
// import div from "react-bootstrap/div";
// import div from "react-bootstrap/div";
import PageHeader from './PageHeader';
import InfoFooterImg from '../images/info-footer.png';
import '../styles/savings-info.css';

const LifeInsuranceInfo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
    const onWindowResize = () => {
      window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
    };
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="savings-info-background">
      <div className="savings-info-header-image">
        <PageHeader title="Life Insurance 정보" />
      </div>

      <div>
        <div>
          <div>
            <Outlet />
          </div>
        </div>
        <div>
          <div className="text-center" md={{ span: 8, offset: 2 }}>
            {/* {!isMobile && (
              <div aspectdiv={49 / 80}>
                <img src={InfoFooterImg} alt='' />
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeInsuranceInfo;
