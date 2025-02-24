import PropTypes from "prop-types";

const CompetitorCard =({name, marketShare,explanation}) => {
    return (
        <div className="competitor-card">
            <h3>{name}</h3>
            <p>Market Share: {marketShare}%</p>
            <p>{explanation}</p>
        </div>
    );
}


function CompetitorList({competitors}){
return(
    <div className="competitor-list">
        {competitors.map((competitor,index)=>(
            <CompetitorCard
            key ={index}
            name={competitor.name}
            marketShare={competitor.marketShare}
            explanation={competitor.explanation}/>
        ))}
    </div>
)
}
CompetitorCard.propTypes ={
    name: PropTypes.string,
    marketShare: PropTypes.string,
    explanation: PropTypes.string
}
CompetitorList.propTypes = {
    competitors: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            marketShare: PropTypes.number.isRequired,
            explanation: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default CompetitorList;
