import React from 'react';
import PropTypes from 'prop-types';


const Button = (props) => {
    return (
        <button onClick={props.buttonClickHandle} disabled={props.disabled}> {props.children}</button>
    )
};

Button.propTypes = {
    buttonClickHandle: PropTypes.func,
    disabled: PropTypes.bool
}

Button.defaultProps = {
    // children:"Click"
}
export default Button;