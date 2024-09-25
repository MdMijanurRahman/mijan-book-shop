// // src/pages/BookDetails.jsx
// import { useParams } from 'react-router-dom';
// import books from '../data/mybook.json';

// const BookDetails = () => {
//   const { id } = useParams();
//   const book = books.find((book) => book.bookId == id);

//   return (
//     <div className="flex">
//       <img src={book.image} alt={book.bookName} className="w-1/2"/>
//       <div className="ml-6">
//         <h2 className="text-3xl font-bold">{book.bookName}</h2>
//         <p>Author: {book.author}</p>
//         <p>Category: {book.category}</p>
//         <p>Review: {book.review}</p>
//         <p>Tags: {book.tags }</p>
//         <p>Total Pages: {book.totalPages}</p>
//         <p>Publisher: {book.publisher}</p>
//         <p>Year of Publishing: {book.yearOfPublishing}</p>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded">
//           Wish to Read
//         </button>
//         <button className="bg-green-500 text-white px-4 py-2 rounded ml-4">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;

// src/pages/BookDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import mybook from '../data/mybook.json'; // Assuming your book data is stored in a JSON file

const BookDetails = () => {
  const { bookId } = useParams(); // Extract the book ID from the URL parameters
  const book = mybook.find(b => b.bookId === parseInt(bookId)); // Find the book by ID
  
  if (!book) {
    return <h1>Book not found</h1>;
  }

  const handleAddToCart = () => {
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart!',
      text: `${book.bookName} has been successfully added to the Cart`,
    });
  };

  const handleWishToRead = () => {
    Swal.fire({
      icon: 'success',
      title: 'Added to Wishlist!',
      text: `${book.bookName} has been successfully added to your Wishlist`,
    });
  };

  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-1/2">
        <img src={book.image} alt={book.bookName} className="w-full h-auto" />
      </div>
      <div className="w-1/2 pl-10">
        <h2 className="text-3xl font-bold mb-4">{book.bookName}</h2>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Category:</strong> {book.category}</p>
        <p><strong>Review:</strong> {book.review}</p>
        <p><strong>Tags:</strong> {book.tags.join(', ')}</p>
        <p><strong>Total Pages:</strong> {book.totalPages}</p>
        <p><strong>Publisher:</strong> {book.publisher}</p>
        <p><strong>Year of Publishing:</strong> {book.yearOfPublishing}</p>
        <p><strong>Rating:</strong> {book.rating} / 5</p>
        
        <div className="mt-6">
          <button onClick={handleWishToRead} className="px-4 py-2 bg-blue-500 text-white rounded mr-4">Wish to Read</button>
          <button onClick={handleAddToCart} className="px-4 py-2 bg-green-500 text-white rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
