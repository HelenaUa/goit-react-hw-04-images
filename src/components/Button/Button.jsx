import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ButtonLoad } from "./Button.styled";

export class Button extends Component {
    state = {
       perPage: 12,
    };

    onClick = () => {
        this.props.click(this.state)
    };

    render() {
         return (
        <ButtonLoad type="button" onClick={this.onClick}>Load more</ButtonLoad>
    )
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
}