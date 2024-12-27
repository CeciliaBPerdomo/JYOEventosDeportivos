"use client"
import { useState } from "react";
import Link from "next/link";

import ModalRegistro from "../admin/registro/page";

// CSS
import "../css_components/navbar.css";
import ModalInicioSesion from "../admin/inicio_sesion/page";

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isInicioSesionOpen, setIsInicioSesionOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOpenInicioSesion = () => {
        setIsInicioSesionOpen(true);
    };

    const handleCloseInicioSesion = () => {
        setIsInicioSesionOpen(false);
    };

    let menuprincipal = [
        {
            titulo: "Carreras",
            vinculo: "/carreras"
        },
        {
            titulo: "Conoce a nuestro equipo",
            vinculo: "/equipo"
        },
        {
            titulo: "Contáctanos",
            vinculo: "/contacto"
        },
    ]


    return (
        <div>
            <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    {/* Logo */}
                    <Link href="/" className="flex flex-col items-center navbar_contenedor_logo">
                        <span className="h-6 mr-3 pl-5 sm:h-9 navbar_jyo"> J & O </span>
                        <span className="self-center whitespace-nowrap dark:text-white navbar_eventos_deportivos">
                            Eventos deportivos
                        </span>
                    </Link>

                    {/* Menú principal */}
                    <ul className="flex flex-wrap items-center justify-center space-x-6 lg:space-x-8 font-medium">
                        {menuprincipal.map((menu, index) => (
                            <li key={index}>
                                <Link href={menu.vinculo}
                                    className="text-gray-700 
                                hover:underline
                                decoration-[#00B6D2]
                                dark:text-gray-400 
                                dark:hover:text-white">
                                    {menu.titulo}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Botones de sesión */}
                    <div className="flex flex-row mt-4 space-x-2 w-full justify-center lg:w-auto lg:mt-0">
                        <button 
                            onClick={handleOpenInicioSesion}
                            className="text-center navbar_iniciar_sesion">
                            INICIAR SESIÓN
                        </button>
                        <button
                            onClick={handleOpenModal}
                            className="text-center navbar_registrarse">
                            REGISTRARSE
                        </button>
                    </div>
                </div>
            </nav>

            {/* Modal */}
            <ModalRegistro isOpen={isModalOpen} onClose={handleCloseModal} />
            <ModalInicioSesion isOpen={isInicioSesionOpen} onClose={handleCloseInicioSesion} />
        </div>
    );
};

export default Navbar;
