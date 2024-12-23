import NavbarCarreras from "../carreras/navbarCarreras"

// CSS 
import "./contacto.css"

const Contacto = () => {
    return (
        <div>
            <NavbarCarreras
                imagenSRC={"/images/banner/Banner_Contactanos.jpg"}
            />
            <div className="mb-5">
                <h1 className="contacto_titulo mt-2 ml-2">Ponte en contacto</h1>
                <p className="contacto_p mt-2 ml-2">¿Tienes alguna duda o consulta? </p>
                <p className="contacto_p ml-2">Envíanos un mensaje y estaremos respondiendo tus dudas lo antes posible.</p>
            </div>

            <form>
                <div className="mb-4">
                    <label className="contacto_label mt-2 ml-3 block">Nombre completo:</label>
                    <input className="contacto_input w-full mt-1 ml-3 p-2" />
                </div>

                <div className="mb-4">
                    <label className="contacto_label mt-2 ml-3 block">Mail:</label>
                    <input className="contacto_input w-full mt-1 ml-3 p-2" />
                </div>

                <div className="mb-4">
                    <label className="contacto_label mt-2 ml-3 block">Mensaje:</label>
                    <textarea className="contacto_textarea ml-3 p-2"></textarea>
                </div>

                <div className="mb-4 flex justify-center mr-5">
                    <button className="contacto_boton_enviar">ENVIAR</button>
                </div>
            </form>
        </div>
    )
}

export default Contacto