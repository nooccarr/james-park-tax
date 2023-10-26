import { Outlet } from 'react-router-dom';

const Results = () => {
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

export default Results;