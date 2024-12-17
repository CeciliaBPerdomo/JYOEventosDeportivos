// CSS
import "../css_components/novedades.css"

const Novedades = () => {
    return (
        <div
            className="mb-4 relative h-[400px] overflow-hidden bg-[url('/images/publicidad/Fondo_boletin.jpg')]  bg-cover bg-no-repeat p-12 text-center text-white">
            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
                <div className="flex h-full items-center justify-center">
                    <div className="text-white">
                        <h2 className="mb-4 uppercase novedades_titulo_novedades">entérate de las Últimas novedades</h2>
                        <h4 className="mb-6 uppercase novedades_titulo_suscribite">SUSCRIBITE A NUESTRO BOLETÍN INFORMATIVO</h4>
                        <div className="flex justify-center">
                            <input
                                className="novedades_input"
                                placeholder="Ingresa tu correo electrónico"
                            />
                            <button
                                type="button"
                                className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] 
                            pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition 
                            duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 
                            focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 
                            active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600
                            novedades_boton"
                                data-twe-ripple-init
                                data-twe-ripple-color="light">
                                Suscribite!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Novedades 