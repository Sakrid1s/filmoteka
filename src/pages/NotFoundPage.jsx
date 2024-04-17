import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <p>Sorry, nothing found</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
