import Link from "next/link"

// Iconos
import Correo from "./iconos/correo"
import Instagram from "./iconos/instagram"
import Telefono from "./iconos/telefono"

//CSS
import "../css_components/footer.css"

const Footer = () => {
    return (
        <div>
            <div className="bg-gray-100">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6  
                text-gray-800 flex flex-wrap justify-center 
                flex justify-between">
                    <div className="p-5">
                        <div className="text-xs font-medium footer_titulos">Enlaces rápidos</div>
                        <Link className="my-3 block footer_encabezados" href="/carreras">
                            Carreras
                            <span className="text-teal-600 text-xs p-1"></span>
                        </Link>
                        <Link className="my-3 block footer_encabezados" href="/equipo">
                            Conoce nuestro equipo
                            <span className="text-teal-600 text-xs p-1"></span>
                        </Link>
                        <Link className="my-3 block footer_encabezados" href="/#">
                            Términos y condiciones
                            <span className="text-teal-600 text-xs p-1"></span>
                        </Link>

                    </div>
                    <div className="p-5">
                        <div className="text-xs font-medium footer_titulos">Contáctanos</div>
                        <Link className="my-3 block flex footer_encabezados" href="/#">
                            <Telefono />
                            <span className="mt-1">099 565 595 - 092 810 119</span>
                            <span className="text-teal-600 text-xs p-1"></span>
                        </Link>
                        <Link className="my-3 block flex footer_encabezados" href="/#">
                            <Correo />
                            <span className="mt-1">contacto@pimpampum.com</span>
                            <span className="text-teal-600 text-xs p-1"></span>
                        </Link>
                    </div>

                    <div className="p-5">
                        <div className="text-xs font-medium footer_titulos">Seguinos en Instagram</div>
                        <Link
                            className="my-3 block flex footer_encabezados"
                            href="https://www.instagram.com/jyo_eventos_deportivos?igsh=Znh4NzJyZm5tbGlh">
                            <Instagram />
                            <span className="mt-1">jyo_eventos_deportivos</span>
                            <span className="text-teal-600 text-xs p-1"></span>
                        </Link>
                    </div>

                    <div className="p-5">
                        <div className="text-xs font-medium footer_titulos">Equipo de Desarrollo</div>
                        <Link className="my-3 block footer_encabezados" href="/#">
                            Diseño UX/UI: Noelia Perdomo
                            <span className="text-teal-600 text-xs p-1"></span>
                        </Link>
                        <Link className="my-3 block footer_encabezados" href="/#">
                            Desarrollo web: Cecilia Perdomo
                            <span className="text-teal-600 text-xs p-1"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer