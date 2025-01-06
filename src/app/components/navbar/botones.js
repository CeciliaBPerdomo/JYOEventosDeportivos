"use client"
import { useState, useEffect } from "react"

//CSS 
import "../../css_components/navbar.css"

// Modales
import ModalRegistro from "@/app/admin/registro/page";
import ModalInicioSesion from "@/app/admin/inicio_sesion/page";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "@/app/lib/userSlice";

export const BotonesInicio = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isInicioSesionOpen, setIsInicioSesionOpen] = useState(false);

    const dispatch = useDispatch()
    // Acceder al estado de autenticación desde Redux
    const currentUser = useSelector((state) => state.usuarios.currentUser);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    const handleOpenInicioSesion = () => setIsInicioSesionOpen(true);
    const handleCloseInicioSesion = () => setIsInicioSesionOpen(false);

    useEffect(() => {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            dispatch(setCurrentUser(JSON.parse(savedUser)));
        }
    }, [dispatch]);


    return (
        <>

            {!currentUser ? (
                <div className="flex flex-row mt-4 space-x-2 w-full justify-center lg:w-auto lg:mt-0">
                    <button
                        onClick={handleOpenInicioSesion}
                        className="text-center navbar_iniciar_sesion">
                        INICIAR SESIÓN
                    </button>
                    <button
                        onClick={handleOpenModal}
                        className="text-center navbar_registrarse">
                        REGISTRARSE
                    </button>
                </div>
            ) :
                (
                    <div>
                        <p>Hola {currentUser.nombre}</p>
                    </div>
                )
            }

            {/* Modal registro */}
            <ModalRegistro
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />

            {/* Modal de inicio de sesion */}
            <ModalInicioSesion
                isOpen={isInicioSesionOpen}
                onClose={handleCloseInicioSesion}
                onSwitch={handleOpenModal}
            />
        </>
    )
}