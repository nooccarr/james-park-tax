import { Link } from 'react-router-dom';

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
    </header>
  );
};

export default Header;