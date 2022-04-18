import React from "react";
import HeaderCenter from "../../UI/HeaderCenter/HeaderCenter";
import Services from "../../Layout/Services/Services";
import Banner from "./Banner/Banner";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Testimonial />
    </div>
  );
};

export default Home;
