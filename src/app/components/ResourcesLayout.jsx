import { Link } from 'react-router-dom';
      
const ResourcesLayout = () => {
  return (
    <nav>
      <ul>
        <li>
          <strong>
            <Link to='/resources/tax'>Tax Information</Link>
          </strong>
          <br />
          Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.
        </li>
        <li>
          <strong>
            <Link to='/resources/medicare'>Medicare Information</Link>
          </strong>
          <br />
          Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.
        </li>
      </ul>
    </nav>
  );
};

export default ResourcesLayout;