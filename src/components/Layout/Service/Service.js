import React from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";

const Service = ({ service }) => {
  const { id, title, description, image, price } = service || {};
  return (
    <div className="shadow-lg overflow-hidden  ">
      <img
        className="transition-all duration-500 delay-100 hover:scale-110"
        src={image}
        alt={title}
      />

      <div className="text-center p-5">
        <h3 className="text-sky-900 text-2xl font-semibold mb-5">{title}</h3>

        <p className="mb-5">{description}</p>

        <h4 className="font-semibold text-xl mb-5">Each Platter: ${price}</h4>

        <Link
          to={`/service/${id}`}
          className="text-white inline-block px-5 py-3 font-semibold bg-orange-600 hover:bg-orange-700"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Service;

{
  /* <Link to={`/service/${id}`}>Book Now</Link> */
}
