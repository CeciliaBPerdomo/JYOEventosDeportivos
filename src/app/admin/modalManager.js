//Redux
import { useSelector, useDispatch } from 'react-redux';
import { openLoginModal, openRegisterModal, closeModals } from "../lib/modalSlice";

// Modales
import ModalInicioSesion from './inicio_sesion/page';
import ModalRegistro from './registro/page';

const ModalManager = () => {
  const dispatch = useDispatch();
  const { loginModalOpen, registerModalOpen } = useSelector((state) => state.modals);

  return (
    <>
      {loginModalOpen && (
        <ModalInicioSesion
          onClose={() => dispatch(closeModals())}
          onSwitch={() => dispatch(openRegisterModal())}
        />
      )}
      {registerModalOpen && (
        <ModalRegistro
          onClose={() => dispatch(closeModals())}
          onSwitch={() => dispatch(openLoginModal())}
        />
      )}
    </>
  );
};

export default ModalManager;
