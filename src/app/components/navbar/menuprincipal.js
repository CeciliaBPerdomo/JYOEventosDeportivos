import Link from "next/link"

//CSS 
import "../../css_components/navbar.css"

export const MenuPrincipal = () => {
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
        <>
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
        </>
    )
}