import useScrollToTop from '../hooks/useScrollToTop';
import EmailForm from './EmailForm';
import PageHeader from './PageHeader';
import ServiceItems from '../data/serviceItems';
import '../styles/services.css';

const Services = () => {
  useScrollToTop();

  return (
    <div className="services-background animate-fadeIn select-none">
      <PageHeader title="서비스" image="services" />

      <main className="max-w-[768px] mx-auto">
        <div className="pt-20 pb-20 mx-5 md:mx-10">
          <div className="flex flex-col gap-20">
            <div className="w-full text-center rounded-0">
              <div className="py-5 bg-[#043a49]">
                <h4 className="service-li-h4">감사 및 회계 업무</h4>
                <h5 className="service-li-h5">exceptional service</h5>
              </div>
              <ul>
                {ServiceItems.map((item) => (
                  <li
                    key={item}
                    className="border-b border-white bg-[#F1F1F1] py-3"
                  >
                    <span className="service-li">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="py-4 mb-10 md:mb-0 bg-[#043a49] border-b-[3px] border-[#AA9465]">
                &nbsp;
              </div>
            </div>
            <div className="w-full">
              <EmailForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
