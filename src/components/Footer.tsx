import React from 'react';
import Link from 'next/link';  // Importando o componente Link do Next.js
import { FaEnvelope, FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Coluna 1 */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4 hover:text-blue-500 transition duration-300 cursor-default">WARAINA INGENIEROS.</h2>
          <p className='hover:text-blue-500 transition duration-300 cursor-default'>Jr Tacna #522<br />Matucana, Huarochiri</p>
          <p className="mt-2 hover:text-blue-500 transition duration-300 cursor-default"><strong>Telefono:</strong> +51 992 747 398</p>
          <p className="mt-2 hover:text-blue-500 transition duration-300 cursor-default"><strong>Email:</strong> informacion@warairaingenieros.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300 cursor-pointer">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300 cursor-pointer">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300 cursor-pointer">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300 cursor-pointer ">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4 hover:text-blue-500 transition duration-300 cursor-default">Menu de busqueda</h3>
          <ul>
            <li className="mb-2 hover:text-blue-500 transition duration-300 cursor-pointer">
              <Link href="/">Inicio</Link>
            </li>
            <li className="mb-2 hover:text-blue-500 transition duration-300 cursor-pointer">
              <Link href="/nosotros">Nosotros</Link>
            </li>
            <li className="mb-2 hover:text-blue-500 transition duration-300 cursor-pointer">
              <Link href="/servicios">Servicios</Link>
            </li>
            <li className="mb-2 hover:text-blue-500 transition duration-300 cursor-pointer">
              <Link href="/equipo">Equipo</Link>
            </li>
            <li className="mb-2 hover:text-blue-500 transition duration-300 cursor-pointer">
              <Link href="/contacto">Contato</Link>
            </li>
            <li className="mb-2 hover:text-blue-500 transition duration-300 cursor-pointer">
              <a
                href="https://wa.me/51992747398"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div>
          <h3 className="text-xl font-bold mb-4 hover:text-blue-500 transition duration-300 cursor-default">Nuestros Servicios</h3>
          <ul>
            <li className="mb-2 hover:text-blue-500 transition duration-300 cursor-default">Construcciones</li>
            <li className="mb-2 hover:text-blue-500 transition duration-300 cursor-default">Evaluacion de Riesgo</li>
            <li className="mb-2 hover:text-blue-500 transition duration-300 cursor-default">Planos Estructurales</li>
            <li className="mb-2 hover:text-blue-500 transition duration-300 cursor-default">Expedientes Tecnicos</li>
            <li className="mb-2 hover:text-blue-500 transition duration-300 cursor-default">Diseños CAD</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
