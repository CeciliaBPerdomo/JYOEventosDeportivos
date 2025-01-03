//CSS 
import "./errorModal.css"

export const ErrorModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="rounded-lg shadow-lg error_modal_fondo flex flex-col items-center">
        <p className="error_modal_p">{message}</p>
        <button
          onClick={onClose}
          className="uppercase error_modal_boton_cerrar"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};