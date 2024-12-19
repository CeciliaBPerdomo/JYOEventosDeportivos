import NavbarCarreras from "../carreras/navbarCarreras"
import CardsEquipo from "./cardsEquipo"


// CSS 
import "./equipo.css"

const Equipo = () => {
    return (
        <div className="mb-4">
            <NavbarCarreras
                imagenSRC={"/images/banner/Banner_Conoce_a_nuestro_equipo.jpg"}
            />
            <h1 className="equipo_conoce_h1 text-center mt-9">
                Conoce a nuestro equipo
            </h1>
            
           <CardsEquipo />
        </div>
    )
}

export default Equipo