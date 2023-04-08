import css from "./modal-overlay.module.css";


// type IModalOverlayProps = {
// 	setModalActive ?: (e: boolean) => void
// 	onClick ?: any
// }

export const ModalOverlay = (props) => {
	return <div className={css.modal_overlay} onClick={props.onClick} />
}

export default ModalOverlay;