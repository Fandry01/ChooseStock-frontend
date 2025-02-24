import './searchbar.css';
import PropTypes from 'prop-types';

function Searchbar({type,barName,inputValue,changeHandler,placeholderValue}){
    return(
        <span className= "searchbar">
            <input type={type ||"text"}
                   name={barName}
                   value={inputValue}
                   onChange={changeHandler}
                   placeholder={placeholderValue}
            />
        </span>
    )
}
Searchbar.propTypes = {
    type: PropTypes.string,
    barName: PropTypes.string,
    inputValue: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired,
    placeholderValue: PropTypes.string.isRequired,
};
export default Searchbar;
