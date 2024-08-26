import React from 'react';
import Image from "next/legacy/image";

interface PortafolioItemProps {
  imageUrl: string;
  title: string;
  category: string;
  province?: string;
  department?: string;
  district?: string;
  year?: string;
  budget?: string;
  area?: string;
  longitud?: string;
  pendientes?: string;
  longitudMuros?: string;
  alturaMuros?: string;
  longitudTechado?: string;
  cerchasTipo?: string;
}

const PortafolioItem: React.FC<PortafolioItemProps> = ({
  imageUrl,
  title,
  category,
  province,
  department,
  district,
  year,
  budget,
  area,
  longitud,
  pendientes,
  longitudMuros,
  alturaMuros,
  longitudTechado,
  cerchasTipo
}) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-slate-800 text-white hover:text-blue-500 transition duration-300 cursor-default">
      <div className="relative w-full h-64 md:h-80">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        {category !== 'Viviendas' && (
          <h4 className="text-xl font-semibold mb-2">Presupuesto</h4>
        )}
        <div className="space-y-1">
          {province && (
            <div className="flex justify-between">
              <span>Provincia</span>
              <span>{province}</span>
            </div>
          )}
          {department && (
            <div className="flex justify-between">
              <span>Departamento</span>
              <span>{department}</span>
            </div>
          )}
          {district && (
            <div className="flex justify-between">
              <span>Distrito</span>
              <span>{district}</span>
            </div>
          )}
          {year && (
            <div className="flex justify-between">
              <span>Año</span>
              <span>{year}</span>
            </div>
          )}
          {area && (
            <div className="flex justify-between">
              <span>Área</span>
              <span>{area}</span>
            </div>
          )}
          {longitud && (
            <div className="flex justify-between">
              <span>Longitud</span>
              <span>{longitud}</span>
            </div>
          )}
          {pendientes && (
            <div className="flex justify-between">
              <span>Pendientes del terreno</span>
              <span>{pendientes}</span>
            </div>
          )}
          {longitudMuros && (
            <div className="flex justify-between">
              <span>Longitud muros de contención</span>
              <span>{longitudMuros}</span>
            </div>
          )}
          {alturaMuros && (
            <div className="flex justify-between">
              <span>Altura muros de contención</span>
              <span>{alturaMuros}</span>
            </div>
          )}
          {longitudTechado && (
            <div className="flex justify-between">
              <span>Longitud de techado</span>
              <span>{longitudTechado}</span>
            </div>
          )}
          {cerchasTipo && (
            <div className="flex justify-between">
              <span>Cerchas tipo</span>
              <span>{cerchasTipo}</span>
            </div>
          )}
          {budget && (
            <div className="flex justify-between">
              <span>Presupuesto</span>
              <span>{budget}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortafolioItem;
