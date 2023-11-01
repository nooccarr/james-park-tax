import Container from 'react-bootstrap/Container';

const PageHeader = ({ title }) => {
  return (
    <Container>
    <section>
      <div>
        <h2>{title}</h2>
      </div>
      </section>
      </Container>
  );
};

export default PageHeader;