import {Chart as ChartJS, Legend, ArcElement,Tooltip} from "chart.js";
import {Pie} from "react-chartjs-2";
import PropTypes from "prop-types";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function StockPieChart({stockData, chartWidth, chartHeight}) {
if(!stockData || !stockData.keyMetrics) return null;

const data ={
                        labels: ["TotalRevenue", "Net Income","TotalAssets","TotalLiabilities"],
                        datasets: [
                            {
                                data: [
                                    parseFloat(stockData.keyMetrics.TotalRevenue),
                                    parseFloat(stockData.keyMetrics.netIncome),
                                    parseFloat(stockData.keyMetrics.TotalAssets),
                                    parseFloat(stockData.keyMetrics.TotalLiabilities)
                                ],
                                backgroundColor: ["#3498db", "#2ecc71", "#e74c3c"],
                                hoverOffset: 4
                            },
                        ],
                    };
const options ={
    responsive:true,
    maintainAspectRatio: false,
};

    return(
        <div style={{width: chartWidth, height:chartHeight}}>
            <Pie data={data} options={options}/>
        </div>
        );
}

StockPieChart.defaultProps = {
    chartWidth: "300px", // Default width if not provided
    chartHeight: "300px", // Default height if not provided
};

StockPieChart.propTypes = {
    stockData: PropTypes.string.isRequired,
    chartWidth: PropTypes.string,
    chartHeight: PropTypes.string,
};
export default StockPieChart;
