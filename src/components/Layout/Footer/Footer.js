import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-16 pt-10 pb-5 bg-cyan-900 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between align-top mb-5">
          <div>
            {" "}
            <Link to="/" className="font-Satisfy text-3xl  inline-block mb-5">
              <span className="text-orange-600">H</span>omeFoodie
            </Link>
            <div>
              <p>Address: 22, Banani, Dhaka, Bangladesh</p>
              <p>Open everyday</p>
              <p>Contact: 3659874521</p>
            </div>
          </div>

          <nav className="font-medium flex md:flex-row lg:flex-row items-center gap-7 mt-5">
            <Link className="hover:text-orange-500" to="/">
              Home
            </Link>
            <Link className="hover:text-orange-500" to="/service">
              Service
            </Link>
            <Link className="hover:text-orange-500" to="/blog">
              Blog
            </Link>
            <Link className="hover:text-orange-500" to="/about">
              About
            </Link>
            <Link className="hover:text-orange-500" to="/login">
              Login
            </Link>
          </nav>
        </div>

        <hr className="my-5" />

        <div>
          <p className="text-center">All right reserved. Copyright 2022 </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
