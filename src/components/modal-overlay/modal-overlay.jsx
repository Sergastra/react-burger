import PropTypes from 'prop-types';
import css from '../modal/modal.module.css';



export const ModalOverlay = ({onClick}) => {
	
		return <div className={css.modal_overlay} onClick={onClick}/>
};

export default ModalOverlay;

ModalOverlay.propTypes = {
	onClick: PropTypes.func.isRequired,
};

