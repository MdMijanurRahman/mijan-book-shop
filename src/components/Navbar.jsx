// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <div className="logo text-2xl">Mijan Book Shop</div>
      <div className="menu flex space-x-4">
        <NavLink to="/" className="hover:text-yellow-500" activeClassName="text-yellow-500">Home</NavLink>
        <NavLink to="/about" className="hover:text-yellow-500" activeClassName="text-yellow-500">About</NavLink>
        <NavLink to="/blog" className="hover:text-yellow-500" activeClassName="text-yellow-500">Blog</NavLink>
        <NavLink to="/faq" className="hover:text-yellow-500" activeClassName="text-yellow-500">FAQ</NavLink>
      </div>
      <div className="buttons space-x-4">
        <button className="bg-blue-500 px-4 py-2 rounded">Buy Book</button>
        <button className="bg-green-500 px-4 py-2 rounded">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
