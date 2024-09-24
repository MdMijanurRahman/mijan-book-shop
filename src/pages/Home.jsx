// src/pages/Home.jsx
import books from '../data/mybook.json';
import Banner from '../components/Banner';
import BookCard from '../components/BookCard';

const Home = () => {
  return (
    <div>
      <Banner />
      <h2 className="text-3xl font-bold my-4">Our Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
