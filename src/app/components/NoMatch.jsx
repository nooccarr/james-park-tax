import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const NoMatch = () => {
  return (
    <main>
      <Container>
        <Row>
          <h2>404: Page Not Found</h2>
        </Row>
        <Row>
          <p>
            <Link to='/'>Go to the home page</Link>
          </p>
        </Row>
      </Container>
    </main>
  );
};

export default NoMatch;