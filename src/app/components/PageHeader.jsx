// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';

const PageHeader = ({ title }) => {
  return (
    <div className="py-16 md:py-28">
      {/* <div className="py-10"> */}
      <div className="ps-5 md:ps-10 flex flex-start">
        <div
          className="text-4xl md:text-5xl md:font-semibold text-[#FFF9D1] text-center"
          // style={{ color: '#FFF9D1', fontSize: '3em', fontWeight: 500 }}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
