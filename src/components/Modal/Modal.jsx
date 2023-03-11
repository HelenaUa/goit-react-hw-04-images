// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalDiv } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');


export const Modal = ({ onClick, src, alt }) => {
    
    // componentDidMount() {
    //    // console.log('Modal componentDidMount');
    //     window.addEventListener('keydown', this.clickToEsc)
    // };

    // componentWillUnmount() {
    //     // console.log('Modal componentWillUnmount');
    //     window.removeEventListener ('keydown', this.clickToEsc)
    // };

    // useEffect(() => { });

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
    


    // clickToEsc = (event) =>{
    //     if (event.code === 'Escape') {
    //         console.dir(onClick);    
    //         onClick();
    //         }
    // }

    
    return createPortal(
        <Overlay onClick={onClick}>
            <ModalDiv>
                <img src={src} alt={alt} />
            </ModalDiv>
        </Overlay>, modalRoot
    )

};