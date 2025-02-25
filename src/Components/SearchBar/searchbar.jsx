import './searchbar.css';
import PropTypes from 'prop-types';

function Searchbar({type = "text",barName = "",inputValue,changeHandler,placeholderValue, className = ""}){
    return(
        <span className= {`searchbar ${className}`}>
            <input type={type}
                   name={barName}
                   value={inputValue}
                   onChange={changeHandler}
                   placeholder={placeholderValue}
            />
        </span>
    );
}
Searchbar.propTypes = {
    type: PropTypes.string,
    barName: PropTypes.string,
    inputValue: PropTypes.string,
    changeHandler: PropTypes.func,
    placeholderValue: PropTypes.string,
    className: PropTypes.string
};
export default Searchbar;
