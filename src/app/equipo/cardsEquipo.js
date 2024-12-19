import Image from "next/image"

const CardsEquipo = () => {

    let equipo = [
        {
            foto: "/images/nuestro_equipo/Jonil_Activo.jpg",
            alternativo: "Jonil",
            texto: "Apasionado deportista, emprendedor de Juan Lacaze con una destacada trayectoria como triatleta e Ironman finisher, ha demostrado su determinación y dedicación en cada desafío. Como director de Mundo Running TV y organizador de eventos deportivos desde 2015, está dejando una huella imborrable en el mundo deportivo."
        },
        {
            foto: "/images/nuestro_equipo/Natalia_Activa.jpg",
            alternativo: "Natalia",
            texto: ""
        },
        {
            foto: "/images/nuestro_equipo/Omi_Activo.jpg",
            alternativo: "Omar",
            texto: ""
        }
    ]

    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                {equipo.map((integrante, index) => (
                    <div className="rounded overflow-hidden shadow-lg" key={index}>
                        <div className="relative">
                            <Image
                                className="w-full"
                                src={integrante.foto}
                                alt={integrante.alternativo}
                                width={500}
                                height={500}
                            />
                            <div
                                className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                            </div>
                        </div>
                        <div className="px-6 py-4">
                            <p className="text-gray-500 text-sm">
                                {integrante.texto}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default CardsEquipo