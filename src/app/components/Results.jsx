import { Outlet } from 'react-router-dom';

const TaxInfo = ({ posts }) => {
  return (
    <div>
      <div>
        <h2>Search Results</h2>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default TaxInfo;