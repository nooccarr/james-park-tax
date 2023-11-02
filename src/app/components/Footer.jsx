import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import '../styles/footer.css';

const Footer = () => {
  const today = new Date();

  return (
    <footer>
      {/* <Stack className='col-md-5 mx-auto py-5'>
        <p className='mx-auto'>&copy; {today.getFullYear()} James Park Tax & Accounting, Inc.</p>
        <p className='mx-auto'>163-10 Northern Boulevard | Flushing, NY 11358 | (718) 359-1096</p>
      </Stack> */}

      <Container className='text-center py-5'>
        <div>&copy; {today.getFullYear()} James Park Tax & Accounting, Inc.</div>
        <div>163-10 Northern Boulevard | Flushing, NY 11358 | (718) 359-1096</div>
      </Container>
    </footer>
  );
};

export default Footer;