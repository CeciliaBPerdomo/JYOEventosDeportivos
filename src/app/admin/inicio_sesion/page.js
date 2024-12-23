//"use client";

// CSS 
import "./inicio_sesion.css"

const ModalInicioSesion = ({ isOpen, onClose }) => {
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
                <h2 className="text-2xl font-semibold mb-4 text-center">Iniciar Sesión</h2>
                <form>
                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Correo Electrónico</label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ingresa tu correo"
                        />
                    </div>
                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ingresa tu contraseña"
                        />
                    </div>
                    {/* Submit Button */}
                    <div className="flex justify-center items-center">
                        <button
                            type="submit"
                            className="modal_inicio_sesion_botoniniciar mr-5 uppercase">
                            INICIAR SESIÓN
                        </button>

                        <button
                            onClick={onClose}
                            className="modal_inicio_sesion_botoncancelar">
                            Cancelar
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <p>
                        ¿No tienes cuenta?
                        {/* <Link href="/admin/registro" className="text-blue-600 hover:underline"> */}
                            Regístrate aquí
                        {/* </Link> */}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ModalInicioSesion;
