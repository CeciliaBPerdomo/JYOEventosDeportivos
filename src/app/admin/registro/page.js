"use client"
import { useState } from "react";

import Image from "next/image";

//CSS
import "./modalRegistro.css"

const ModalRegistro = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // No renderiza si el modal no está abierto.

    // Para guardar la info
    const initialValues = {
        nombre: "",
        cedula: "",
        celular: "",
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(values)
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 modal_registro_fondo">
                <h2 className="text-xl font-semibold mb-4 modal_registro_titulo">Registrate</h2>
                <form>
                    <div className="mb-4">
                        <label className="block modal_registro_label">Nombre completo</label>
                        <div className="flex items-center relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                <path
                                    d="M14.3333 16C14.3333 14.837 14.3333 14.2555 14.1898 13.7824C13.8666 12.717 13.033 11.8834 11.9676 11.5602C11.4945 11.4167 10.913 11.4167 9.75 11.4167H5.58334C4.42036 11.4167 3.83888 11.4167 3.36572 11.5602C2.30038 11.8834 1.4667 12.717 1.14353 13.7824C1 14.2555 1 14.837 1 16M11.4167 4.75C11.4167 6.82107 9.73773 8.5 7.66667 8.5C5.5956 8.5 3.91667 6.82107 3.91667 4.75C3.91667 2.67893 5.5956 1 7.66667 1C9.73773 1 11.4167 2.67893 11.4167 4.75Z"
                                    stroke="#101828"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <input
                                type="text"
                                className="w-full modal_registro_input pl-10"
                                placeholder="Nombre completo"
                                name="nombre"
                                value={values.nombre}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block modal_registro_label">Documento de identidad</label>
                        <div className="flex items-center relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="9" viewBox="0 0 13 9" fill="none" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                <path d="M6.21422 7.64283C6.21422 7.15549 6.21422 6.91182 6.15271 6.71354C6.01421 6.26712 5.65692 5.91776 5.20035 5.78234C4.99756 5.72219 4.74835 5.72219 4.24994 5.72219H2.46423C1.96581 5.72219 1.7166 5.72219 1.51382 5.78234C1.05724 5.91776 0.699953 6.26712 0.561453 6.71354C0.499939 6.91182 0.499939 7.15549 0.499939 7.64283M4.96422 2.92855C4.96422 3.79642 4.24468 4.49997 3.35708 4.49997C2.46948 4.49997 1.74994 3.79642 1.74994 2.92855C1.74994 2.06067 2.46948 1.35712 3.35708 1.35712C4.24468 1.35712 4.96422 2.06067 4.96422 2.92855Z"
                                    stroke="#101828" strokeLinecap="round" strokeLinejoin="round" />
                                <line x1="7.92865" y1="2.57141" x2="12.5001" y2="2.57141" stroke="black" />
                                <line x1="7.92865" y1="4.28577" x2="12.5001" y2="4.28577" stroke="black" />
                                <line x1="7.92865" y1="6" x2="12.5001" y2="6" stroke="black" />
                            </svg>
                            <input
                                type="text"
                                className="w-full modal_registro_input pl-12"
                                placeholder="Documento sin puntos ni guiones"
                                name="cedula"
                                value={values.cedula}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block modal_registro_label">Celular</label>
                        <div className="flex items-center relative">
                            <Image
                                src={"/images/iconos/tel_icon.jpg"}
                                alt="celular"
                                width={15}
                                height={15}
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            />
                            <input
                                type="text"
                                className="w-full modal_registro_input pl-10"
                                placeholder="Celular"
                                name="celular"
                                value={values.celular}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block modal_registro_label">Correo electrónico</label>
                        <div className="flex items-center relative">
                            <Image
                                src={"/images/iconos/email_icon.jpg"}
                                alt="correo"
                                width={15}
                                height={15}
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            />
                            <input
                                type="text"
                                className="w-full modal_registro_input pl-12"
                                placeholder="Correo electrónico"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block modal_registro_label">Contraseña</label>
                        <div className="flex items-center relative">
                            <Image
                                src={"/images/iconos/contrasena_icon.jpg"}
                                alt="password"
                                width={15}
                                height={15}
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            />
                            <input
                                type="password"
                                className="w-full modal_registro_input pl-12"
                                placeholder="Contraseña"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>


                    <div className="flex justify-center items-center">
                        <button
                            type="button"
                            className="modal_registro_botonregistro mr-5 uppercase"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Registrarse
                        </button>

                        <button
                            onClick={onClose}
                            className="modal_registro_botoncancelar">
                            Cancelar
                        </button>
                    </div>
                </form>
                <p className="modal_registro_ya_tienes">¿Ya tienes una cuenta? Iniciar sesión </p>
            </div>
        </div>
    );
};

export default ModalRegistro;
