import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Check out our Online-brary</h1>
      <Link to="/books">Catalog</Link>
    </div>
  );
}
