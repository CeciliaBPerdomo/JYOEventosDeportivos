import Image from "next/image"

// Iconos
import ProximasIconos from "../iconos/proximasIconos"

//CSS 
import "../../css_components/proximas.css"

const Half = () => {
    return (
        <div className="flex items-center justify-center ">
            <div className="relative flex flex-col 
                md:flex-row  my-6 bg-white shadow-sm border 
                border-slate-200 rounded-lg">
                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                    <Image
                        src="/images/proximas/omi.jpg"
                        alt="card-image"
                        width={500}
                        height={500}
                        className="h-full w-full rounded-md md:rounded-lg object-cover"
                    />

                    <button className="proximas_fecha absolute top-4 left-4">
                        27 Abril 2025
                    </button>
                </div>
                <div>
                    <div className="p-6 relative flex flex-col justify-between"
                    //   style={{width: "800px"}} --> Tamaño pc
                    >
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
                            <div className="flex flex-col items-center justify-center space-y-2 mt-4">
                                <button className="proximas_detalle_carrera">
                                    Ver detalles de la carrera
                                </button>

                                <button className="proximas_inscribite_carrera mt-1">
                                    INSCRIBITE !
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Half