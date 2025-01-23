import useScrollToTop from '../hooks/useScrollToTop';
import { Outlet } from 'react-router-dom';
import PageHeader from './PageHeader';
import '../styles/medicare-info.css';

const InsuranceInfo = () => {
  useScrollToTop();

  return (
    <div className="medicare-info-background animate-fadeIn">
      <PageHeader title="Insurance 정보" image="medicare-info" />

      <main className="max-w-[768px] mx-auto">
        <div className="pt-20 pb-20 md:pb-40 mx-5 md:mx-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default InsuranceInfo;
