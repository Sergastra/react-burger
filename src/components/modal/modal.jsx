import ReactDOM from "react-dom";
import styles from './modal.module.css';
import { useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import ModalOverlay from "../modal-overlay/modal-overlay";

const modalRoot = document.getElementById("modal");

export const Modal = ({ children, title, onClose }) => {

    useEffect(() => {
        const handleEsc = (e) => {
            e.key === "Escape" && onClose();
        };

        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("keydown", handleEsc);
        };

    }, [onClose]);

    return ReactDOM.createPortal(

        <>
        
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h3 className="text text_type_main-large">{title}</h3>
                    <button type="button" className={styles.button}>
                        <CloseIcon type="primary" onClick={onClose} />
                    </button>
                </div>
                <div className={styles.content}>{children}</div>
            </div>

            <ModalOverlay onClick={onClose} />
        </>,

        modalRoot
    );
};

export default Modal;

Modal.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func,
};
