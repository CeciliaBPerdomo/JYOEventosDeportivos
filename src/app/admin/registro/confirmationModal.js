//CSS
import "./confirmationModal.css"

export const ConfirmationModal = ({ isOpen, isClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="rounded-lg shadow-lg confirmacion_modal_fondo flex flex-col items-center">
                <h2 className="confirmacion_modal_h2">¡Gracias por registrarte!</h2>
                <button
                    onClick={isClose}
                    className="confirmacion_modal_boton_cerrar uppercase">
                    Cerrar
                </button>
            </div>
        </div>
    );
};

