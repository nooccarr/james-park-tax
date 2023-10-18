const Footer = () => {
  const today = new Date();

  return (
    <footer>
      <p>
        <span>&copy; {today.getFullYear()} </span>
        James Park Tax & Accounting, Inc.
      </p>
      <p>
        <span>163-10 Northern Blvd | Flushing, NY 11358 | (718) 359-1098</span>
      </p>
      <p>
        <span>Site Designed by </span>
        <a href='https://www.soohyunlim.dev/'>Soohyun Lim</a>
      </p>    
    </footer>
  );
};

export default Footer;