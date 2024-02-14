// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';

const PageHeader = ({ title }) => {
  return (
    <div className="py-14">
      {/* <div className="py-10"> */}
      <div className="ps-5 md:ps-10">
        <div
          className="text-5xl text-[#FFF9D1]"
          // style={{ color: '#FFF9D1', fontSize: '3em', fontWeight: 500 }}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
