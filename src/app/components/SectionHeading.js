import React from "react";

const SectionHeading = ({ title, description }) => {
  return (
    <div className="text-center flex justify-center">
      <div className="w-full sm:w-2/3">
        <h1 className="text-3xl">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default SectionHeading;
