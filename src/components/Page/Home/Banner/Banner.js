import React from "react";
import Button from "../../../UI/Button/Button";
import "./Banner.css";

const Banner = () => {
  return (
    <section>
      <div className="banner flex items-center">
        <div className="container mx-auto text-white">
          <div className="">
            <h3 className="text-4xl text-orange-600 mb-10">
              Welcome to Deliciouso
            </h3>
            <h2 className="text-7xl font-Satisfy mb-5">
              Where taste meets <br /> excellence service.
            </h2>

            <p className="mb-5">
              Vulputate rutrum tempus eleifend faucibus vehicula taciti potenti
              facilisis <br /> ante consectetuer vitae nisl
            </p>

            <Button>Discover More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
