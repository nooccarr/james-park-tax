import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';

const NoMatch = () => {
  return (
    <main>
      <Stack>
        <h1 className='mx-auto'>404</h1>
        <h3 className='mx-auto'>Sorry, the page not found</h3>
        <p className='mx-auto'>
          <Link to='/'>Go to the home page</Link>
        </p>
      </Stack>
    </main>
  );
};

export default NoMatch;