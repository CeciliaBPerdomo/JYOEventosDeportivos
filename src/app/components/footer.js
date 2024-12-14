const Footer = () => {
    return (
        <div>
            <div className="bg-gray-100">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6  
                text-gray-800 flex flex-wrap justify-center 
                flex justify-between">
                    <div className="p-5">
                        <div className="text-xs uppercase text-gray-500 font-medium">Enlaces rápidos</div>
                        <a className="my-3 block" href="/#">Carreras <span className="text-teal-600 text-xs p-1"></span>
                        </a>
                        <a className="my-3 block" href="/#">Conoce nuestro equipo<span className="text-teal-600 text-xs p-1"></span>
                        </a>
                        <a className="my-3 block" href="/#">Términos y condiciones <span className="text-teal-600 text-xs p-1"></span>
                        </a>
                        {/* <a className="my-3 block" href="/#">Pricing <span className="text-teal-600 text-xs p-1"></span>
                        </a>
                        <a className="my-3 block" href="/#">Partners <span className="text-teal-600 text-xs p-1">New</span>
                        </a> */}
                    </div>
                    <div className="p-5">
                        <div className="text-xs uppercase text-gray-500 font-medium">Contáctanos</div>

                        <a className="my-3 block" href="/#">099 565 595 - 092 810 119<span className="text-teal-600 text-xs p-1"></span>
                        </a>
                        <a className="my-3 block" href="/#">contacto@pimpampum.com<span className="text-teal-600 text-xs p-1"></span>
                        </a>
                        {/* <a className="my-3 block" href="/#">Support <span className="text-teal-600 text-xs p-1">New</span>
                        </a> */}
                    </div>
                    <div className="p-5">
                        <div className="text-xs uppercase text-gray-500 font-medium">Seguinos en Instagram</div>
                        <a className="my-3 block" href="/#">jyo_eventos_deportivos<span className="text-teal-600 text-xs p-1"></span>
                        </a>
                        {/* <a className="my-3 block" href="/#">Privacy Policy <span className="text-teal-600 text-xs p-1"></span>
                        </a>
                        <a className="my-3 block" href="/#">Conditions <span className="text-teal-600 text-xs p-1"></span>
                        </a> */}
                    </div>
                    <div className="p-5">
                        <div className="text-xs uppercase text-gray-500 font-medium">Equipo de Desarrollo</div>

                        <a className="my-3 block" href="/#">Diseño: Noelia Perdomo
                            <span className="text-teal-600 text-xs p-1"></span>
                        </a>

                        <a className="my-3 block" href="/#">Desarrollo: Cecilia Perdomo
                            <span className="text-teal-600 text-xs p-1"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer