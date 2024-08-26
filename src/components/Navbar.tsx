'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/legacy/image";
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.body.classList.add(savedTheme);
        } else {
            document.body.classList.add('light');
        }
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(newTheme);
    };

    return (
        <div>
            <nav className="p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/">
                            <Image src="/logo.png" alt="Logo" width={100} height={100} />
                        </Link>
                    </div>
                    <div className="lg:hidden flex items-center">
                        <button onClick={toggleMenu} className="focus:outline-none mr-4">
                            <svg
                                className="w-8 h-8 hover:text-blue-500 transition duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                        <button onClick={toggleTheme} className="hover:text-blue-500 transition duration-300 focus:outline-none">
                            {theme === 'light' ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
                        </button>
                    </div>
                    <ul className="hidden lg:flex lg:space-x-4 lg:items-center">
                        <li>
                            <Link href="/" className="block p-4 lg:p-2 hover:text-blue-500 transition duration-300 text-center">
                                Início
                            </Link>
                        </li>
                        <li>
                            <Link href="/nosotros" className="block p-4 lg:p-2 hover:text-blue-500 transition duration-300 text-center">
                                Nosotros
                            </Link>
                        </li>
                        <li>
                            <Link href="/servicios" className="block p-4 lg:p-2 hover:text-blue-500 transition duration-300 text-center">
                                Servicios
                            </Link>
                        </li>
                        <li>
                            <Link href="/portafolio" className="block p-4 lg:p-2 hover:text-blue-500 transition duration-300 text-center">
                                Portafolio
                            </Link>
                        </li>
                        <li>
                            <Link href="/equipo" className="block p-4 lg:p-2 hover:text-blue-500 transition duration-300 text-center">
                                Equipo
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacto" className="block p-4 lg:p-2 hover:text-blue-500 transition duration-300 text-center">
                                Contato
                            </Link>
                        </li>
                        <li>
                            <button onClick={toggleTheme} className="p-2 focus:outline-none hover:text-blue-500 transition duration-300">
                                {theme === 'light' ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={`${isOpen ? 'block' : 'hidden'} xl:hidden`}>
                <ul className="space-y-1">
                    <li className="text-center">
                        <Link href="/" className="block p-1 hover:text-blue-500 transition duration-300" onClick={handleLinkClick}>
                            Início
                        </Link>
                    </li>
                    <li className="text-center">
                        <Link href="/nosotros" className="block p-1 hover:text-blue-500 transition duration-300" onClick={handleLinkClick}>
                            Nosotros
                        </Link>
                    </li>
                    <li className="text-center">
                        <Link href="/servicios" className="block p-1 hover:text-blue-500 transition duration-300" onClick={handleLinkClick}>
                            Servicios
                        </Link>
                    </li>
                    <li className="text-center">
                        <Link href="/portafolio" className="block p-1 hover:text-blue-500 transition duration-300" onClick={handleLinkClick}>
                            Portafolio
                        </Link>
                    </li>
                    <li className="text-center">
                        <Link href="/equipo" className="block p-1 hover:text-blue-500 transition duration-300" onClick={handleLinkClick}>
                            Equipo
                        </Link>
                    </li>
                    <li className="text-center">
                        <Link href="/contacto" className="block p-1 hover:text-blue-500 transition duration-300" onClick={handleLinkClick}>
                            Contato
                        </Link>
                    </li>
                    <li className="text-center">
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
