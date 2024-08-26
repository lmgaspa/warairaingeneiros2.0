import React from 'react';
import Image from "next/legacy/image";
import { clientes } from '../data/clientesData';

const Clientes: React.FC = () => {
  return (
    <div className="bg-slate-200 text-black mt-12 pt-12">
      <h2 className="text-4xl font-bold mb-8 text-center hover:text-blue-500 transition duration-300 cursor-default">Nuestros Clientes</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {clientes.map((cliente) => (
          <div key={cliente.id} className="flex justify-center items-center p-4">
            <Image src={cliente.src} alt={cliente.alt} width={150} height={150} objectFit="contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clientes;