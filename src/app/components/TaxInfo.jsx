import useScrollToTop from '../hooks/useScrollToTop';
import { Outlet } from 'react-router-dom';
import PageHeader from './PageHeader';
import '../styles/tax-info.css';

const TaxInfo = () => {
  useScrollToTop();

  return (
    <div className="tax-info-background animate-fadeIn">
      <div className="services-header-image">
        <PageHeader title="Tax 정보" />
      </div>

      <main className="max-w-[2240px] mx-auto">
        <div className="pt-20 pb-20 md:pb-40 mx-5 md:mx-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default TaxInfo;
