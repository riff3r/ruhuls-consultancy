import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";

const SignUp = () => {
  const userNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, error] = useUpdateProfile(auth);

  const handleSignUp = (event) => {
    event.preventDefault();
    const displayName = userNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      toast("Password Not Matched");
      return;
    }

    console.log(displayName, email, password, confirmPassword);

    createUserWithEmailAndPassword(email, password);

    updateProfile({ displayName });
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign Up</h1>
          <ToastContainer />
          <form onSubmit={handleSignUp}>
            <input
              ref={userNameRef}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              ref={emailRef}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              ref={passwordRef}
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              ref={confirmPasswordRef}
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 w-full text-center py-3 rounded bg-green text-white  focus:outline-none my-1"
            >
              Create Account
            </button>

            <div className="text-grey-dark mt-6">
              Already have an account?{" "}
              <Link
                className="border-b border-blue text-orange-600"
                to="/login"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
