import Link from "next/link"

//CSS 
import "../../css_components/navbar.css" 

export const LogoNavBar = () => {
    return (
        <>
            <Link href="/" className="flex flex-col items-center navbar_contenedor_logo">
                <span className="h-6 mr-3 pl-5 sm:h-9 navbar_jyo"> J & O </span>
                <span className="self-center whitespace-nowrap dark:text-white navbar_eventos_deportivos">
                    Eventos deportivos
                </span>
            </Link>

        </>
    )
}