import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-sky-900 text-white py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-Satisfy text-3xl font-bold">
            HomeFoodie
          </Link>

          <nav className="font-medium flex gap-7">
            <Link to="/">Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
            <Link
              className="bg-orange-600 px-5 py-3 font-semibold"
              to="/signup"
            >
              Signup
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
