// src/components/BookCard.jsx
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-4">
      <img className="w-full" src={book.image} alt={book.bookName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{book.bookName}</div>
        <p className="text-gray-700 text-base">{book.author}</p>
        <p className="text-sm">{book.category}</p>
        <p>Rating: {book.rating}</p>
        <Link to={`/book/${book.bookId}`} className="text-blue-500">
          Book Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
