import Image from "next/image"

const NavbarCarreras = ({imagenSRC}) => {
    return (
        <div className="relative w-full overflow-hidden">
            <Image
                src={imagenSRC}
                alt="Banner Carreras"
                width={1920}
                height={500}
            />
        </div>
    )
}

export default NavbarCarreras