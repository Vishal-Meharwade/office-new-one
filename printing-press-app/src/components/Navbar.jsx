import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-2 flex justify-between">
      <div className="text-lg font-bold">Printing Press</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/printing" className="hover:underline">
          Printing
        </Link>
        <Link to="/multicolor" className="hover:underline">
          Multicolor
        </Link>
        <Link to="/admin" className="hover:underline">
          Admin Panel
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
