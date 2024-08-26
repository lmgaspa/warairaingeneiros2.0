import React from 'react';
import SlideShow from '../components/SlideShow';
import Clientes from '../components/Clientes';
import Image from 'next/legacy/image';

const Nosotros: React.FC = () => {
    return (
        <div id="inicio">
            <div className="relative h-screen">
                <Image
                    src="/images/hero.jpg"
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="z-0"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 hover:text-blue-500 transition duration-300 cursor-default">Waraira Ingenieros</h1>
                    <p className="text-2xl md:text-3xl text-white hover:text-blue-500 transition duration-300 cursor-default">Calidad / Garantia / Profesionalismo</p>
                </div>
            </div>
            <div className="container mx-auto pt-12 px-12">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-4xl font-bold mb-4 hover:text-blue-500 transition duration-300 cursor-default">Historia</h1>
                        <p>
                            Waraira Ingenieros es una empresa de ingeniería y construcción que se ha consolidado en el mercado nacional e internacional en áreas como: Proyectos en desarrollos de vivienda unifamiliar, multifamiliar, infraestructuras educativas, edificaciones, mejoramiento del ornato público, infraestructura de riesgo, diseño de interiores, infraestructura vial, diseño de líneas de conducción y aducción de agua potable, alcantarillado y plantas de tratamiento. Desde el año 2019 comienza sus actividades como persona jurídica ampliando su estructura física y capital humano, actualmente cuenta con 20 colaboradores ubicado en diferentes países de América y Europa formando un gran equipo que a diario trabajan para brindar productos de calidad.
                        </p>
                    </div>
                    <div className="w-full md:w-3/4 pl-0 md:pl-10 max-sm:pt-8">
                        <SlideShow />
                    </div>
                </div>
                <Clientes />
                <div className="mt-4 mb-12">
                    <Image
                        src="/images/portafolio/infraestructuras_educativas/colegio_calahuaya.jpg"
                        alt="Colegio"
                        width={1200}
                        height={800}
                        layout="responsive"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Nosotros;
