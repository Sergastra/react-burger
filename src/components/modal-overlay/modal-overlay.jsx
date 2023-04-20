import './modal-overlay.css';



// type IModalOverlayProps = {
// 	setModalActive ?: (e: boolean) => void
// 	onClick ?: any
// }

export const ModalOverlay = (onClose) => {
	console.log({'overlay=>': onClose});
	return <div className='modal_overlay' onClick={() => onClose} />
}

export default ModalOverlay;