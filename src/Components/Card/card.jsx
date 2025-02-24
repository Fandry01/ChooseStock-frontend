import PropTypes from 'prop-types';
import './card.css'
function Card({title,value,children,className}) {
    return (
        <>
            <div className={`card ${className}`}>
                <h3>{title}</h3>
                {children ? children : <p>{value}</p>}
            </div>
        </>
    );
}
Card.propTypes ={
    title: PropTypes.string,
    value: PropTypes.node,
    children: PropTypes.node,
    className: PropTypes.string,
}

export default Card;
