// CSS
import "../css_components/navbar.css";

// Componentes
import { LogoNavBar } from "./navbar/logo";
import { MenuPrincipal } from "./navbar/menuprincipal";
import { BotonesInicio } from "./navbar/botones";

const Navbar = () => {
    return (
        <div>
            <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    {/* Logo */}
                    <LogoNavBar />

                    {/* Menú principal */}
                    <MenuPrincipal />

                    {/* Botones de sesión */}
                    <BotonesInicio />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
