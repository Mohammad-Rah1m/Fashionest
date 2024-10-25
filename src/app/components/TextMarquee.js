// components/Marquee.js
import React from 'react';

const Marquee = ({ text }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <p className="inline-block text-2xl font-bold text-gray-800 animate-marquee">
        {text}
      </p>
      <p className="inline-block text-2xl font-bold text-gray-800 animate-marquee ml-8">
        {text}
      </p>
    </div>
  );
};

export default Marquee;
