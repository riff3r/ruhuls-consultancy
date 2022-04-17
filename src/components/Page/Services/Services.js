import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useServices from "../../Hooks/useServices";
import Service from "../../Layout/Service/Service";
import Button from "../../UI/Button/Button";

const Services = () => {
  const [services] = useServices();

  return (
    <section className="service-background mb-10">
      <div className="container mx-auto">
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
