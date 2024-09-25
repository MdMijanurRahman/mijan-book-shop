// src/pages/BookDetails.jsx
import { useParams } from 'react-router-dom';
import books from '../data/mybook.json';

const BookDetails = () => {
  const { id } = useParams();
  const book = books.find((book) => book.bookId == id);

  return (
    <div className="flex">
      <img src={book.image} alt={book.bookName} className="w-1/2"/>
      <div className="ml-6">
        <h2 className="text-3xl font-bold">{book.bookName}</h2>
        <p>Author: {book.author}</p>
        <p>Category: {book.category}</p>
        <p>Review: {book.review}</p>
        <p>Tags: {book.tags }</p>
        <p>Total Pages: {book.totalPages}</p>
        <p>Publisher: {book.publisher}</p>
        <p>Year of Publishing: {book.yearOfPublishing}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Wish to Read
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded ml-4">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
