import React from 'react';
import Image from "next/legacy/image";

interface ServiceCardProps {
  title: string;
  imageUrl: string;
  details: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imageUrl, details }) => {
  return (
    <div className="bg-slate-800 text-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between h-full">
      <div className="relative w-full h-64">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4 flex flex-col items-center flex-grow hover:text-blue-500 transition duration-300 cursor-default">
        <h2 className="text-xl font-bold pb-2 ">{title}</h2>
        <p className="">{details}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
