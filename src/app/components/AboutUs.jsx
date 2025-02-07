import PageHeader from './PageHeader';
import AboutUsImg from '../images/about-us.jpg';
import useScrollToTop from '../hooks/useScrollToTop';
import '../styles/about-us.css';

const AboutUs = () => {
  useScrollToTop();

  const aboutUsDescription = (
    <div className="text-container">
      <p>안녕하세요?</p>
      <p className="pb-5">
        제임스 박 회계사 홈페이지를 찾아 주셔서 감사 드립니다.
      </p>
      <p>
        유능한 명의는 사람의 생명을 구하고 유능한 회계사는 사업체를 구한다고
        합니다.
      </p>
      <p className="pb-5">
        올바른 회계사 선택이야 말로 고객의 소중한 재산을 지킬 수 있습니다.
      </p>
      <p className="pb-5">
        또한 무거운 세금때문에 잠못이룬 적이 있다면 언제든 연락주세요.
      </p>
      <p className="pb-5">
        고객의 절세가 최상의 목표이며 이를 위해 최선을 다하고 있습니다.
      </p>
      <p className="pb-5">
        지금까지 만족스러운 세금 및 회계 서비스를 받지 못하신 분이 계시면 저희
        회사 이메일, 카카오톡, 전화 및 방문 상담하시기 바랍니다.
      </p>
      <p className="pb-10">감사합니다.</p>
      <p>
        <strong className="pe-2">대표 회계사</strong>제임스 박
      </p>
    </div>
  );

  return (
    <div className="about-us-background animate-fadeIn select-none">
      <PageHeader title="회사소개" image="services" />

      <main className="max-w-[768px] mx-auto">
        <div className="mx-5 md:mx-10 mb-20 md:mb-40">
          <div className="my-10">
            <div className="flex flex-wrap justify-center items-center gap-3 mb-4">
              <span className="header-span">믿고 맡길수 있는 </span>
              <h1 className="header-h1 mb-0">든든한 회계사</h1>
            </div>
            <div className="flex justify-center">
              <h3 className="header-h3 text-center">
                탁월한 지식으로 성심성의껏 고객의 재무 안전을 책임집니다.
              </h3>
            </div>
          </div>

          <div className="aspect-square mb-10">
            <img src={AboutUsImg} alt="" fetchpriority="high" />
          </div>
          {aboutUsDescription}
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
