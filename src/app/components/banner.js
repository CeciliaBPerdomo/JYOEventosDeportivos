"use client"; 
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
    "/images/banner/Banner_portada_1.jpg", // Asegúrate de reemplazar con tus rutas de imágenes
    "/images/banner/Banner_portada_2.jpg",
    "/images/banner/Banner_portada_3.jpg",
    "/images/banner/Banner_portada_4.jpg",
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 10000); // 10 segundos
    
        // Limpiar intervalo al desmontar el componente
        return () => clearInterval(interval);
      }, [currentIndex]); // Dependencia para reiniciar el intervalo cuando cambia el índice

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full overflow-hidden mt-3">
            {/* Contenedor de Imágenes */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((src, index) => (
                    <Image
                        key={index}
                        src={src}
                        width={1500}
                        height={1500}
                        alt={`Slide ${index}`}
                        className="w-full flex-shrink-0 object-cover h-[300px] md:h-[500px] lg:h-[600px]"
                    />
                ))}
            </div>

            {/* Botones de Navegación */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full opacity-70 hover:opacity-100"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full opacity-70 hover:opacity-100"
            >
                &#10095;
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-3 w-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-400"
                            } cursor-pointer`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Banner;
