import React from "react";
import HeaderCenter from "../../UI/HeaderCenter/HeaderCenter";
import Services from "../Services/Services";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <HeaderCenter
        title="Our Services"
        subtitle="The catering with the royal touch"
      />
      <Services />
    </div>
  );
};

export default Home;
