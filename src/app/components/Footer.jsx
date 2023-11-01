import Stack from 'react-bootstrap/Stack';

const Footer = () => {
  const today = new Date();

  return (
    <footer>
      <Stack className='col-md-4 mx-auto'>
        <p>
          <span>&copy; {today.getFullYear()} </span>
          James Park Tax & Accounting, Inc.
        </p>
        <p>
          <span>163-10 Northern Boulevard | Flushing, NY 11358 | (718) 359-1096</span>
        </p>
      </Stack>
    </footer>
  );
};

export default Footer;