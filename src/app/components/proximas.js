import Image from "next/image"

//CSS
import "../css_components/proximas.css"

// Iconos
import ProximasIconos from "./iconos/proximasIconos"

const ProximasCarreras = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 pt-5"
            style={{ backgroundColor: "#F9F9F9" }}>
            <h1 className="proximas_titulo text-start text-2xl md:text-3xl font-bold my-6">
                Próximas carreras
            </h1>
            <div className="flex items-center justify-center ">
                <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border 
                border-slate-200 rounded-lg">
                    <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                        <Image
                            src="/images/proximas/omi.jpg"
                            alt="card-image"
                            width={500}
                            height={500}
                            className="h-full w-full rounded-md md:rounded-lg object-cover"
                        />
                    </div>
                    <div className="p-6 relative flex flex-col justify-between">
                        <div>
                            <button className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-4 md:right-4 
                            bg-teal-600 py-1 px-3 sm:px-4 text-[10px] sm:text-xs md:text-sm lg:text-base 
                            text-white rounded-full shadow-sm transition-all proximas_inscripciones_abiertas"
                            >
                                Inscripciones abiertas
                            </button>
                        </div>
                        <div>
                            <h4 className="text-slate-800 text-lg sm:text-xl mt-9 md:text-2xl font-semibold proximas_h4">
                                Triatlón Half Las Cañas
                            </h4>
                            <p className="mb-6 sm:mb-8 proximas_p text-sm sm:text-base">
                                Las Cañas, Río Negro
                            </p>
                        </div>

                        <div>
                            <ProximasIconos />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProximasCarreras