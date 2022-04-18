import React, { Fragment } from "react";
import useServices from "../../Hooks/useServices";
import Service from "../../Layout/Service/Service";
import HeaderCenter from "../../UI/HeaderCenter/HeaderCenter";
import "./Services.css";

const Services = () => {
  const [services] = useServices();

  return (
    <Fragment>
      <HeaderCenter
        title="My Services"
        subtitle="I'm an Experts To Generate Great Visa"
      />

      <section id="services" className="">
        <div className="container mx-auto">
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Service key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Services;
