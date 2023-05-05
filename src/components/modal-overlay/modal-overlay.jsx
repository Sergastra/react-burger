
import css from '../modal/modal.module.css';



export const ModalOverlay = (onClick) => {
	
		return (
		
			<div className={css.modal_overlay} onClick= {() =>  onClick}/>
		)
};

export default ModalOverlay;

