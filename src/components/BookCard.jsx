// // src/components/BookCard.jsx
// import { Link } from 'react-router-dom';

// const BookCard = ({ book }) => {
//   return (
//     <div className="max-w-xs rounded overflow-hidden shadow-lg my-4">
//       <img className="w-full h-52" src={book.image} alt={book.bookName} />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{book.bookName}</div>
//         <p className="text-gray-700 text-base">{book.author}</p>
//         <p className="text-sm">{book.category}</p>
//         <p>Rating: {book.rating}</p>
//         <Link to={`/book/${book.bookId}`} className="text-blue-500">
//           Book Details
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default BookCard;

// src/components/BookCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="card">
      <img src={book.image} alt={book.bookName} className="w-full h-60" />
      <h2>{book.bookName}</h2>
      <p>{book.author}</p>
      <Link to={`/books/${book.bookId}`}>
        <button className="text-blue-500">Book Details</button>
      </Link>
    </div>
  );
};

export default BookCard;
