import React from "react";
import { toast, ToastContainer } from "react-toastify";

const Checkout = () => {
  const handleCheckOut = (event) => {
    event.preventDefault();

    toast("Your order placed");
  };

  return (
    <main>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Checkout</h1>
            <ToastContainer />
            <form onSubmit={handleCheckOut}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullname"
                placeholder="Full Name"
                required
              />

              <input
                type="number"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="phone"
                placeholder="Contact"
                required
              />

              <textarea
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Address"
                required
              />

              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 w-full text-center py-3 rounded bg-green text-white  focus:outline-none my-1"
              >
                Check Out
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
