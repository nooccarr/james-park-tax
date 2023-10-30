import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {


  return (
    <header>
      <Stack direction='horizontal' gap={3}>
        <div className='p-2'>
            <Link to='/'>
              <h1>James Park</h1>
              <h2>Tax & Accounting</h2>
          </Link>
        </div>
        <div className='p-2 ms-auto'>
          <div>CALL US TODAY</div>
          <a href='tel:+17183591096'>(718) 359-1096</a>
        </div>
        <div className='vr' />
        <div className='p-2'>
          <Link to='/search'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
        </div>
      </Stack>
    </header>
  );
};

export default Header;