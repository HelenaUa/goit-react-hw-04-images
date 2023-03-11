import PropTypes from 'prop-types';
// import React, { Component } from 'react';
import { ButtonLoad } from "./Button.styled";

export const Button = ({click}) => {
    // state = {
    //    perPage: 12,
    // };

    // onClick = () => {
    //     this.props.click(this.state)
    // };

         return (
        <ButtonLoad type="button" onClick={click}>Load more</ButtonLoad>
    )
    
}

Button.propTypes = {
    onClick: PropTypes.func,
}