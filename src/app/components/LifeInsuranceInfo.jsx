import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import PageHeader from './PageHeader';
import '../styles/savings-info.css';

const LifeInsuranceInfo = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="savings-info-background">
      <div className="savings-info-header-image">
        <PageHeader title="Life Insurance 정보" />
      </div>

      <div className="max-w-[2240px] mx-auto">
        <div className="pt-20 pb-20 md:pb-40 mx-5 md:mx-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LifeInsuranceInfo;
