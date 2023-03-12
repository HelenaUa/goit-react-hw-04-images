import PropTypes from 'prop-types';
import { ButtonLoad } from "./Button.styled";


export const Button = ({ click }) => {
    
    return (
        <ButtonLoad type="button" onClick={click}>Load more</ButtonLoad>
    ) 
};

Button.propTypes = {
    onClick: PropTypes.func,
};