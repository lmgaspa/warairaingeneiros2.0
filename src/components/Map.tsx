import dynamic from 'next/dynamic';
import React from 'react';

const MapComponent = dynamic(
  () => import('./MapComponent'),
  { ssr: false }
);

const Map: React.FC = () => {
  return (
    <div className="container mx-auto px-0">
      <h2 className="text-3xl font-bold text-center mb-4 hover:text-blue-500 transition duration-300 cursor-default">Nuestra Dirección</h2>
      <MapComponent />
    </div>
  );
};

export default Map;