/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const SkillCard = ({ imageSrc, title }) => {
  return (
    <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
      <div className="h-56 overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover"/>
      </div>
      <div className="p-4 text-center text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default SkillCard;
