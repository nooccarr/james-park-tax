import useScrollToTop from '../hooks/useScrollToTop';
import { Outlet } from 'react-router-dom';
import PageHeader from './PageHeader';
import '../styles/tax-info.css';

const TaxInfo = () => {
  useScrollToTop();

  return (
    <div className="tax-info-background animate-fadeIn select-none">
      <PageHeader title="Tax 정보" image="services" />

      <main className="max-w-[768px] mx-auto">
        <div className="pt-20 pb-20 md:pb-40 mx-5 md:mx-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default TaxInfo;
