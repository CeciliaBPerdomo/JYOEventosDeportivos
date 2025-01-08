import Link from "next/link"

//CSS 
import "../../css_components/proximas.css"


const Inscribite = () => {
    return (
        <div>
            <Link href={"https://cronometrajeinstantaneo.com/inscripciones/half-triatlon-las-canas"}>
                <button
                    className="proximas_inscribite_carrera mt-1"
                    type="button"
                >
                    INSCRIBITE !
                </button>
            </Link>
        </div>
    )
}

export default Inscribite