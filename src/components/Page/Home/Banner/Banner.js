import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../UI/Button/Button";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="mb-5">
      <div className="banner flex items-center">
        <div className="container mx-auto text-white">
          <div className="py-10 md:py-52  px-5 md:px-0">
            <h3 className="text-4xl text-orange-600 mb-10">
              TRAVISA TRAVELS IMMIGRATION & VISA Consultant
            </h3>
            <h2 className="text-7xl font-Satisfy mb-5">
              Immigration & Visa <br /> Consultant Worldwide
            </h2>

            <p className="mb-5">
              I Provide Solution To All Migration & Visa Matters
            </p>

            <a
              className="text-white inline-block px-5 py-3 font-semibold bg-orange-600 hover:bg-orange-700"
              href="#services"
            >
              Discover More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
