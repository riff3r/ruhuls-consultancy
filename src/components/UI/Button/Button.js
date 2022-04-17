import React from "react";
import "./Button.css";

const Button = ({ children, navRoute }) => {
  console.log(navRoute);
  return (
    <button className="text-white px-5 py-3 font-semibold bg-orange-600 hover:bg-orange-700 ">
      {children}
    </button>
  );
};

export default Button;
