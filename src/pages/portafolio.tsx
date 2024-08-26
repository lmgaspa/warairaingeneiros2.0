"use client";
import React, { useState } from 'react';
import FilterMenu from '../components/FilterMenu';
import PortafolioItem from '../components/PortafolioItem';
import { portafolioItems } from '../data/portafolioData';
import Image from 'next/image';

const Portafolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Ornatos públicos', 'Infraestructura de riesgo', 'Infraestructuras educativas', 'Agua y desagüe', 'Infraestructura vial', 'Complejos deportivos', 'Viviendas'];

  const filteredItems = selectedCategory === 'Todos'
    ? portafolioItems
    : portafolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="container mx-auto py-12 max-sm:px-0 md:px-0">
      <h1 className="text-4xl font-bold mb-8 text-center hover:text-blue-500 transition duration-300 cursor-default">Tipos de Trabajos</h1>
      <FilterMenu
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-8 gap-6">
        {filteredItems.map((item) => (
          <PortafolioItem
            key={item.id}
            category={item.category}
            imageUrl={item.imageUrl}
            title={item.title}
            province={item.province}
            department={item.department}
            district={item.district}
            year={item.year}
            budget={item.budget}
            area={item.area}
            longitud={item.longitud}
            pendientes={item.pendientes}
            longitudMuros={item.longitudMuros}
            alturaMuros={item.alturaMuros}
            longitudTechado={item.longitudTechado}
            cerchasTipo={item.cerchasTipo}
          />
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center pt-10">
        <div className="mr-8 mb-8 md:mb-0  pl-8">
          <Image
            src="/images/projectimg.png"
            alt="Estadísticas de Servicios"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div>
          <div className='max-sm:px-2'>
            <h2 className="text-3xl font-bold mb-4 text-center md:text-left hover:text-blue-500 transition duration-300 cursor-default">Estadísticas de Servicios</h2>
            <p className="text-xl mb-4 text-center md:text-left">
              Durante nuestros años de experiencia y servicios, diseño, implementación y construcción nuestros resultados son
            </p>
            <ul className="text-lg text-center md:text-left">
              <li className="mb-2">
                <span className="font-bold text-2xl">25</span> Clientes Satisfechos y referencias en nuestros proyectos.
              </li>
              <li className="mb-2">
                <span className="font-bold text-2xl">22</span> Proyectos realizados con calidad humana y garantía profesional.
              </li>
              <li>
                <span className="font-bold text-2xl">5</span> Años de Experiencia con mejora continua y progreso en el uso de herramientas de ingeniería.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
