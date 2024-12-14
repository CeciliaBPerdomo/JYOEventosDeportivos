import Image from "next/image"

// CSS
import "../../css_components/proximasIconos.css"

const ProximasIconos = () => {
    return (
        <div className="mb-2">
            <div className="flex justify-center items-center space-x-4 mt-4">
                <Image
                    src="/images/proximas/icono_nadar.jpg"
                    alt="card-image"
                    width={100}
                    height={65}
                />

                <Image
                    src="/images/proximas/Icono_bici.jpg"
                    alt="card-image"
                    width={100}
                    height={65}
                />

                <Image
                    src="/images/proximas/Icono_correr.jpg"
                    alt="card-image"
                    width={100}
                    height={65}
                />
            </div>
            <div className="flex justify-center items-center space-x-4 mt-1 text-center">
                <p className="proximas_iconos_p">1,9km Natación</p>
                <p className="proximas_iconos_p">90km Ciclismo</p>
                <p className="proximas_iconos_p">21km Pedestrismo</p>
            </div>
        </div>
    )
}

export default ProximasIconos

