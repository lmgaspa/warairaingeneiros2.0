
import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { servicios } from 'src/data/servicios';

const Servicios: React.FC = () => {
  return (
    <div className="bg-slate-200 text-black">
      <div className="container mx-auto pt-4 pb-4 md:px-2 max-sm:px-8 lg:px-6">
        <h1 className="text-4xl font-bold mb-8 text-center hover:text-blue-500 transition duration-300 cursor-default">CONOCE NUESTROS SERVICIOS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {servicios.map((servicio, index) => (
            <ServiceCard
              key={index}
              title={servicio.title}
              imageUrl={servicio.imageUrl}
              details={servicio.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicios;