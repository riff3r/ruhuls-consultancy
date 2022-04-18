import React, { Fragment } from "react";
import Services from "../../Layout/Services/Services";
import HeaderCenter from "../../UI/HeaderCenter/HeaderCenter";

const ServicePage = () => {
  return (
    <Fragment>
      <HeaderCenter
        title="Our Services"
        subtitle="The catering with the royal touch"
      />
      <Services />
    </Fragment>
  );
};

export default ServicePage;
