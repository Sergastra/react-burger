import './modal-overlay.css';

export const ModalOverlay = (onClose) => {
	
	return <div className='modal_overlay' onClick={() => onClose} />
}

export default ModalOverlay;

