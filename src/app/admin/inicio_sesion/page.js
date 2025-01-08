"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';

//Redux
import { useDispatch } from 'react-redux';
import { loginUsuario } from "@/app/lib/userSlice";

// CSS 
import "./inicio_sesion.css"
import { ErrorModal } from "../registro/errorModal";

const ModalInicioSesion = ({ isOpen, onClose, onSwitch }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    // Modal de mensaje de error
    const [errorMessage, setErrorMessage] = useState("");
    const [showErrorModal, setShowErrorModal] = useState(false);

    // Para guardar la info
    const initialValues = {
        email: "",
        password: ""
    }

    const [values, setValues] = useState(initialValues)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    // Modal de error
    const handleErrorClose = () => {
        setShowErrorModal(false);
    };

    // Iniciar sesion
    const handleSubmit = async (e) => {
        e.preventDefault()
        // setLoading(true);  // Activar el loader

        try {
            // Disparar la acción de inicio de sesión
            const userLoggedIn = await dispatch(loginUsuario(values));
            if (userLoggedIn.payload == "Mail o password incorrectos") {
                setErrorMessage("El email o password estan incorrectos.");
                setShowErrorModal(true);
                return
            }

            if (userLoggedIn.meta.requestStatus === "fulfilled") {
                onClose()
                setValues(initialValues)
                // setLoading(false);
                router.push('/')
            }

        } catch (error) {
            setErrorMessage(error);
            setShowErrorModal(true);
            return
        }
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 iniciar_sesion_fondo">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    onClick={onClose}
                >
                    ✕
                </button>
                <h2 className="text-2xl font-semibold mb-4 text-start modal_inicio_titulo">Iniciar Sesión</h2>
                <form>
                    {/* Email Input */}
                    <div className="mb-4 relative">
                        <label className="block modal_inicio_labels">Correo Electrónico</label>
                        <div className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="16"
                                viewBox="0 0 19 16"
                                fill="none"
                                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                            >
                                <path
                                    d="M17.6667 2.66667C17.6667 1.75 16.9167 1 16 1H2.66667C1.75 1 1 1.75 1 2.66667M17.6667 2.66667V12.6667C17.6667 13.5833 16.9167 14.3333 16 14.3333H2.66667C1.75 14.3333 1 13.5833 1 12.6667V2.66667M17.6667 2.66667L9.33333 8.5L1 2.66667"
                                    stroke="black"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <input
                                type="email"
                                className="w-full p-2 pl-10 border rounded modal_inicio_inputs"
                                placeholder="Ingresa tu correo"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="block modal_inicio_labels">Contraseña</label>
                        <div className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="21"
                                viewBox="0 0 16 21"
                                fill="none"
                                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                            >
                                <path
                                    d="M2 21C1.45 21 0.979167 20.8042 0.5875 20.4125C0.195833 20.0208 0 19.55 0 19V9C0 8.45 0.195833 7.97917 0.5875 7.5875C0.979167 7.19583 1.45 7 2 7H3V5C3 3.61667 3.4875 2.4375 4.4625 1.4625C5.4375 0.4875 6.61667 0 8 0C9.38333 0 10.5625 0.4875 11.5375 1.4625C12.5125 2.4375 13 3.61667 13 5V7H14C14.55 7 15.0208 7.19583 15.4125 7.5875C15.8042 7.97917 16 8.45 16 9V19C16 19.55 15.8042 20.0208 15.4125 20.4125C15.0208 20.8042 14.55 21 14 21H2ZM8 16C8.55 16 9.02083 15.8042 9.4125 15.4125C9.80417 15.0208 10 14.55 10 14C10 13.45 9.80417 12.9792 9.4125 12.5875C9.02083 12.1958 8.55 12 8 12C7.45 12 6.97917 12.1958 6.5875 12.5875C6.19583 12.9792 6 13.45 6 14C6 14.55 6.19583 15.0208 6.5875 15.4125C6.97917 15.8042 7.45 16 8 16ZM5 7H11V5C11 4.16667 10.7083 3.45833 10.125 2.875C9.54167 2.29167 8.83333 2 8 2C7.16667 2 6.45833 2.29167 5.875 2.875C5.29167 3.45833 5 4.16667 5 5V7Z"
                                    fill="#1C1B1F"
                                />
                            </svg>
                            <input
                                type="password"
                                className="w-full p-2 pl-10 border rounded modal_inicio_inputs"
                                placeholder="Ingresa tu contraseña"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center items-center">
                        <button
                            type="button"
                            className="modal_inicio_sesion_botoniniciar mr-5 uppercase"
                            onClick={handleSubmit}
                        >
                            INICIAR SESIÓN
                        </button>

                        <button
                            onClick={onClose}
                            className="modal_inicio_sesion_botoncancelar">
                            Cancelar
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center modal_inicio_sincuenta">

                    <p> ¿No tienes cuenta? {" "}
                        <span
                            onClick={() => {
                                onClose(); // Cerrar el modal actual
                                onSwitch(); // Abrir el modal de registro
                            }}
                        >
                            Regístrate aquí
                        </span>
                    </p>
                </div>
            </div>

            {/* Modal de mensaje de error */}
            <ErrorModal
                isOpen={showErrorModal}
                onClose={handleErrorClose}
                message={errorMessage}
            />
        </div>
    );
};

export default ModalInicioSesion;
