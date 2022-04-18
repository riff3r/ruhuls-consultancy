import { signOut } from "firebase/auth";
import React, { Fragment } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import Button from "../../UI/Button/Button";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  console.log(user);

  return (
    <header className="bg-sky-900 text-white py-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
          <Link to="/" className="font-Satisfy text-3xl">
            <span className="text-orange-600">H</span>omeFoodie
          </Link>

          <nav className="font-medium flex flex-col md:flex-row lg:flex-row items-center gap-7">
            <Link to="/">Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            {!user?.uid ? (
              <Fragment>
                <Link to="/login">Login</Link>
                <Link
                  className="bg-orange-600 px-5 py-2 font-semibold"
                  to="/signup"
                >
                  Signup
                </Link>
              </Fragment>
            ) : (
              <Link
                to="/"
                onClick={() => signOut(auth)}
                className="text-white px-5 py-3 font-semibold "
              >
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
