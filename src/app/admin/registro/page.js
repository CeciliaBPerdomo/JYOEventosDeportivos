//CSS
import "./modalRegistro.css"

const ModalRegistro = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // No renderiza si el modal no está abierto.

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
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block modal_registro_label">Celular</label>
                        <div className="flex items-center relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                <path d="M5.54216 6.24889C6.12216 7.4569 6.91281 8.5891 7.91413 9.59042C8.91544 10.5917 10.0476 11.3824 11.2557 11.9624C11.3596 12.0123 11.4115 12.0372 11.4773 12.0564C11.7109 12.1245 11.9978 12.0756 12.1956 11.9339C12.2513 11.894 12.2989 11.8464 12.3942 11.7511C12.6855 11.4598 12.8312 11.3141 12.9777 11.2189C13.5301 10.8597 14.2422 10.8597 14.7947 11.2189C14.9411 11.3141 15.0868 11.4598 15.3781 11.7511L15.5405 11.9135C15.9834 12.3564 16.2048 12.5778 16.3251 12.8156C16.5644 13.2886 16.5644 13.8472 16.3251 14.3201C16.2048 14.558 15.9834 14.7794 15.5405 15.2223L15.4092 15.3536C14.9678 15.795 14.7471 16.0157 14.4471 16.1842C14.1142 16.3712 13.5971 16.5057 13.2153 16.5045C12.8711 16.5035 12.636 16.4368 12.1656 16.3033C9.63776 15.5858 7.25246 14.2321 5.26248 12.2421C3.27249 10.2521 1.91877 7.86679 1.20129 5.33896C1.06778 4.86858 1.00103 4.6334 1.00001 4.28928C0.998871 3.90742 1.13334 3.39035 1.32036 3.05743C1.4889 2.7574 1.70957 2.53672 2.15092 2.09537L2.28229 1.96401C2.72516 1.52114 2.94659 1.29971 3.18441 1.17942C3.65738 0.940194 4.21593 0.940194 4.6889 1.17942C4.92671 1.29971 5.14815 1.52114 5.59102 1.96401L5.75341 2.1264C6.04475 2.41774 6.19042 2.56341 6.28565 2.70989C6.64482 3.2623 6.64482 3.97445 6.28565 4.52686C6.19042 4.67334 6.04475 4.81901 5.75341 5.11035C5.65815 5.20561 5.61052 5.25324 5.57065 5.30891C5.42897 5.50677 5.38006 5.79365 5.44816 6.02728C5.46732 6.09302 5.49227 6.14498 5.54216 6.24889Z"
                                    stroke="#101828"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <input
                                type="text"
                                className="w-full modal_registro_input pl-10"
                                placeholder="Celular"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block modal_registro_label">Correo electrónico</label>
                        <div className="flex items-center relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                <path d="M17.6667 2.66667C17.6667 1.75 16.9167 1 16 1H2.66667C1.75 1 1 1.75 1 2.66667M17.6667 2.66667V12.6667C17.6667 13.5833 16.9167 14.3333 16 14.3333H2.66667C1.75 14.3333 1 13.5833 1 12.6667V2.66667M17.6667 2.66667L9.33333 8.5L1 2.66667"
                                    stroke="black"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                            <input
                                type="text"
                                className="w-full modal_registro_input pl-12"
                                placeholder="Correo electrónico"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block modal_registro_label">Contraseña</label>
                        <div className="flex items-center relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                <path d="M2 21C1.45 21 0.979167 20.8042 0.5875 20.4125C0.195833 20.0208 0 19.55 0 19V9C0 8.45 0.195833 7.97917 0.5875 7.5875C0.979167 7.19583 1.45 7 2 7H3V5C3 3.61667 3.4875 2.4375 4.4625 1.4625C5.4375 0.4875 6.61667 0 8 0C9.38333 0 10.5625 0.4875 11.5375 1.4625C12.5125 2.4375 13 3.61667 13 5V7H14C14.55 7 15.0208 7.19583 15.4125 7.5875C15.8042 7.97917 16 8.45 16 9V19C16 19.55 15.8042 20.0208 15.4125 20.4125C15.0208 20.8042 14.55 21 14 21H2ZM8 16C8.55 16 9.02083 15.8042 9.4125 15.4125C9.80417 15.0208 10 14.55 10 14C10 13.45 9.80417 12.9792 9.4125 12.5875C9.02083 12.1958 8.55 12 8 12C7.45 12 6.97917 12.1958 6.5875 12.5875C6.19583 12.9792 6 13.45 6 14C6 14.55 6.19583 15.0208 6.5875 15.4125C6.97917 15.8042 7.45 16 8 16ZM5 7H11V5C11 4.16667 10.7083 3.45833 10.125 2.875C9.54167 2.29167 8.83333 2 8 2C7.16667 2 6.45833 2.29167 5.875 2.875C5.29167 3.45833 5 4.16667 5 5V7Z"
                                    fill="#1C1B1F" />
                            </svg>
                            <input
                                type="text"
                                className="w-full modal_registro_input pl-12"
                                placeholder="Contraseña"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button
                            type="submit"
                            className="modal_registro_botonregistro">
                            Registrarse
                        </button>
                    </div>
                </form>
                <div className="flex justify-center items-center">
                    <button
                        onClick={onClose}
                        className="mt-4 w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalRegistro;
