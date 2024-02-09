// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';

const PageHeader = ({ title }) => {
  return (
    <div as="section" className="py-5">
      <div className="ps-2 py-5">
        <div
          className="p-0"
          style={{ color: '#FFF9D1', fontSize: '3em', fontWeight: 500 }}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
