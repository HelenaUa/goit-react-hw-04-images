// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalDiv } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');


export class Modal extends Component {
    
    componentDidMount() {
       // console.log('Modal componentDidMount');
        window.addEventListener('keydown', this.clickToEsc)
    };

    componentWillUnmount() {
        // console.log('Modal componentWillUnmount');
        window.removeEventListener ('keydown', this.clickToEsc)
    };

    clickToEsc = (event) =>{
        if (event.code === 'Escape') {
            console.dir(this.props.onClick);    
            this.props.onClick();
            }
    }

    render() {
      return createPortal(
        <Overlay onClick={this.props.onClick}>
            <ModalDiv>
               <img src={this.props.src} alt={this.props.alt} />
            </ModalDiv>
        </Overlay>, modalRoot
    )
    }
   
}