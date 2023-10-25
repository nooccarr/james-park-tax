import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SearchParams from './SearchParams';

const Header = () => {


  return (
    <header>
      <div>
        <Link to='/'>
          <h1>James Park</h1>
          <h2>Tax & Accounting</h2>
        </Link>
      </div>
      <div>
        <span>CALL US TODAY</span>
        <a href='tel:+17183591096'>(718) 359-1096</a>      
      </div>
      <div>
        <Link to='/search'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>
      </div>
      <Outlet />        
    </header>
  );
};

export default Header;