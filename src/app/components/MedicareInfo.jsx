import { Outlet } from 'react-router-dom';

const MedicareInfo = ({ category = 'Medicare' }) => {

  return (
    <div>
      <div>
        <h2>{category} 정보</h2>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MedicareInfo;