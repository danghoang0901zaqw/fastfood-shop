import React from "react";

const CommonSection = ({ title }) => {
  return (
    <div className={`w-full bg-banner-2 bg-no-repeat bg-cover bg-center py-20`}>
      <h2 className="text-center font-bold text-slate-100 text-5xl">{title}</h2>
    </div>
  );
};

export default CommonSection;
