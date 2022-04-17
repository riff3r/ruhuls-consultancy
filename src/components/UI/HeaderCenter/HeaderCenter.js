import React from "react";

const HeaderCenter = ({ title, subtitle, description }) => {
  return (
    <div className="container mx-auto py-10 text-center">
      <h2 className="text-orange-600 font-Satisfy text-4xl">{title}</h2>
      <h3 className="text-sky-900 text-6xl py-5">{subtitle}</h3>
      {description && <p>description</p>}
    </div>
  );
};

export default HeaderCenter;
