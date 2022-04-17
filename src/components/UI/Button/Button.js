import React from "react";

const Button = (props) => {
  return (
    <button className="bg-orange-600 px-5 py-3 font-semibold ">
      {props.children}
    </button>
  );
};

export default Button;
