import React from 'react';
import Image from 'next/legacy/image';

const FolderPage: React.FC = () => {
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
        </div>
    )
};

export default FolderPage