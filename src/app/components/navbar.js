import Link from "next/link";

// CSS
import "../css_components/navbar.css";

const Navbar = () => {
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
                        <li>
                            <Link href="#"
                                className="text-gray-700 hover:text-purple-700 dark:text-gray-400 dark:hover:text-white">
                                Carreras
                            </Link>
                        </li>
                        <li>
                            <Link href="#"
                                className="text-gray-700 hover:text-purple-700 dark:text-gray-400 dark:hover:text-white">
                                Conoce nuestro equipo
                            </Link>
                        </li>
                        <li>
                            <Link href="#"
                                className="text-gray-700 hover:text-purple-700 dark:text-gray-400 dark:hover:text-white">
                                Contáctanos
                            </Link>
                        </li>
                    </ul>

                    {/* Botones de sesión */}
                    <div className="flex flex-row mt-4 space-x-2 w-full justify-center lg:w-auto lg:mt-0">
                        <Link href=""
                            className="focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 text-center navbar_iniciar_sesion">
                            INICIAR SESIÓN
                        </Link>
                        <Link href=""
                            className="focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 text-center navbar_registrarse">
                            REGISTRARSE
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
