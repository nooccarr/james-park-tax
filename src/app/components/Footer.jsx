import Stack from 'react-bootstrap/Stack';
import '../styles/footer.css';

const Footer = () => {
  const today = new Date();

  return (
    <footer>
      <Stack className='col-md-5 mx-auto py-5'>
        <p className='mx-auto'>&copy; {today.getFullYear()} James Park Tax & Accounting, Inc.</p>
        <p className='mx-auto'>163-10 Northern Boulevard | Flushing, NY 11358 | (718) 359-1096</p>
      </Stack>
    </footer>
  );
};

export default Footer;