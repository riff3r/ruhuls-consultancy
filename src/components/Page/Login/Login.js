import React, { useEffect, useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdatePassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../Firebase/Firebase.init";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  let navigate = useNavigate();
  let location = useLocation();

  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  console.log(emailUser);
  console.log(resetError?.message);

  useEffect(() => {
    if (emailUser) {
      navigate(from, { replace: true });
    }
    if (googleUser) {
      navigate(from, { replace: true });
    }
    if (resetError) {
      toast(resetError?.message);
    }
  }, [emailUser, googleUser, resetError]);

  let from = location.state?.from?.pathname || "/";

  console.log(from);

  const handleEmailLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  const handleForgetPassword = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;

    console.log(email);

    if (!email) {
      toast("Please enter your Email");
      return;
    }

    await sendPasswordResetEmail(email);

    toast("Please check your email to reset password");
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Login</h1>
          <ToastContainer />
          <form onSubmit={handleEmailLogin}>
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

            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 w-full text-center py-3 rounded bg-green text-white  focus:outline-none my-1"
            >
              Login
            </button>

            <button
              onClick={handleGoogleLogin}
              type="button"
              className="bg-orange-600 hover:bg-orange-700 w-full text-center py-3 rounded bg-green text-white  focus:outline-none my-1 flex items-center justify-center gap-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>

              <span>Login With Google</span>
            </button>

            <div className="text-grey-dark mt-6">
              <button
                onClick={handleForgetPassword}
                className="border-b border-blue text-orange-600"
                to="/signup"
              >
                Forgot Password?
              </button>
            </div>

            <div className="text-grey-dark mt-6">
              Already have an account?{" "}
              <Link
                className="border-b border-blue text-orange-600"
                to="/signup"
              >
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
