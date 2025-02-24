import {Bar} from "react-chartjs-2";
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,BarElement,Title,Tooltip,Legend} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export const BarChart = () =>{
    const options = {};
    const data = {};
    return <Bar options={options} data={data}>LineGraph</Bar>
};
