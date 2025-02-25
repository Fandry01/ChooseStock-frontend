
import PropTypes from 'prop-types';

function Button({children,variant, buttonType,handleClick,handleSubmit}) {
    return (
        <button
            className={`${variant}`}
            type={buttonType}
            onClick={handleClick}
            onSubmit={handleSubmit}
        >
            { children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
    buttonType: PropTypes.string,
    handleClick: PropTypes.func,
    handleSubmit: PropTypes.func,
    className: PropTypes.string,
};

export default Button;
