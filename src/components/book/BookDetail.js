import Book from './Book';
import { useBookDetail } from '../../hooks/useBookDetail';
import { Link, useParams } from 'react-router-dom';

function BookDetail() {
  const params = useParams();
  const { book, loading, error } = useBookDetail(params);

  if (error)
    return (
      <>
        <h1>Something went wrong :(</h1> <h2>{error}</h2>
      </>
    );

  if (loading) return <h3>Loading book...</h3>;

  return (
    <div>
      <h3>
        <Link to="/books">Back to Index</Link>
      </h3>
      <Book book={book} showDetail />
    </div>
  );
}

export default BookDetail;
