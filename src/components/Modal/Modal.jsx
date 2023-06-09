import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalDiv } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');


export const Modal = ({ onClick, src, alt }) => {
    
    useEffect(() => {
        const clickToEsc = (event) => {
            if (event.code === 'Escape') {
                onClick();
            }
            return;
        }
        window.addEventListener('keydown', clickToEsc)
        
        return () => { window.removeEventListener('keydown', clickToEsc) }
    });
      
    return createPortal(
        <Overlay onClick={onClick}>
            <ModalDiv>
                <img src={src} alt={alt} />
            </ModalDiv>
        </Overlay>, modalRoot
    )

};

Modal.propTypes = {
    onClick: PropTypes.func,
    src: PropTypes.string,
    alt: PropTypes.string,
};