import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <h2>
      This page doesn't exist. Go <Link to="/">Home</Link>
    </h2>
  );
}

export default NotFoundPage;
