const ModalRegistro = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // No renderiza si el modal no está abierto.

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Registro</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                            placeholder="Ingrese su correo"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                            placeholder="Ingrese su contraseña"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                        Registrarse
                    </button>
                </form>
                <button
                    onClick={onClose}
                    className="mt-4 w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300">
                    Cancelar
                </button>
            </div>
        </div>
    );
};

export default ModalRegistro;
