import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import PageHeader from './PageHeader';
import '../styles/medicare-info.css';

const MedicareInfo = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="medicare-info-background">
      <div className="medicare-info-header-image">
        <PageHeader title="Medicare 정보" />
      </div>

      <div className="max-w-[2240px] mx-auto">
        <div className="pt-20 pb-20 md:pb-40 mx-5 md:mx-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MedicareInfo;
