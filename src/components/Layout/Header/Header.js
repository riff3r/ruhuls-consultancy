import { signOut } from "firebase/auth";
import React, { Fragment, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  return (
    <header className="bg-sky-900 text-white py-4 md:py-0">
      <div className="container mx-auto">
        <div className="md:flex md:flex-row lg:flex-row justify-between items-center px-5 md:px-0 transition-all duration-500 delay-500 ease-in ">
          <div className="flex justify-between items-center">
            <Link to="/" className="font-Satisfy text-3xl">
              <span className="text-orange-600">H</span>omeFoodie
            </Link>

            {navbarOpen ? (
              <svg
                className="md:hidden"
                onClick={() => setNavbarOpen(!navbarOpen)}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                />
                <path
                  fillRule="evenodd"
                  d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setNavbarOpen(!navbarOpen)}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="md:hidden"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            )}
          </div>

          <nav
            className={`py-5 font-medium flex flex-col items-start md:flex-row lg:flex-row md:items-center gap-7 ${
              !navbarOpen && "hidden md:flex"
            }`}
          >
            <Link onClick={() => setNavbarOpen(!navbarOpen)} to="/">
              Home
            </Link>
            <Link onClick={() => setNavbarOpen(!navbarOpen)} to="/services">
              Services
            </Link>
            <Link onClick={() => setNavbarOpen(!navbarOpen)} to="/blog">
              Blog
            </Link>
            <Link onClick={() => setNavbarOpen(!navbarOpen)} to="/about">
              About
            </Link>
            {!user?.uid ? (
              <Fragment>
                <Link onClick={() => setNavbarOpen(!navbarOpen)} to="/login">
                  Login
                </Link>
                <Link
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className="bg-orange-600 px-5 py-2 font-semibold"
                  to="/signup"
                >
                  Signup
                </Link>
              </Fragment>
            ) : (
              <Link to="/" onClick={() => signOut(auth)}>
                Logout
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
