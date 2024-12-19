//CSS
import "../css_components/proximas.css"

import Half from "./proximas/20250427"

const ProximasCarreras = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 pt-5"
            style={{ backgroundColor: "#F9F9F9" }}>
            <h1 className="proximas_titulo 
            md:text-center md:text-3xl 
            sm:text-center
            font-bold my-6">
                Próximas carreras
            </h1>
            <Half />
        </div>
    )
}

export default ProximasCarreras