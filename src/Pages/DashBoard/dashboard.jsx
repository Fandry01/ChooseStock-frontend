import './dashboard.css';
import Searchbar from "../../Components/SearchBar/searchbar.jsx";
import {useEffect, useState} from "react";
import StockPieChart from "../../Components/Chart/Pie.jsx";
import Button from "../../Components/Button/Button.jsx";
import {fetchStockData} from "../../Service/apiService.jsx";
import Card from "../../Components/Card/card.jsx";
import {ClipLoader} from "react-spinners";
import CompetitorList from "../../Components/CompetitorCard.jsx";
import WelcomeMessage from "../../Components/WelcomeMessage/WelcomeMessage.jsx";


function Dashboard() {
    const [searchInput,setSearchInput] = useState('');
    const [symbol,setSymbol] = useState('');
    const [stockData,setStockData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [showWelcome,setShowWelcome] = useState(true);
    const [error,setError] = useState(null);

    const handleSearchClick = () => {
        if (!searchInput) {
            setError("Please enter a stock symbol.");
            return;
        }
        setSymbol(searchInput);
        setError(null);
        console.log('Search button clicked, symbol:', searchInput);
    };
    useEffect(() => {
        if (stockData && Object.keys(stockData).length > 0) {
            setShowWelcome(false);
        }
    }, [stockData]);

    useEffect(() => {
    if(symbol){
        setLoading(true);
        fetchStockData(symbol)
            .then(data =>{
                if(data){
                    console.log("API response", data);
                    setStockData(data);
                } else{
                    console.error("Invalid stock ticker. Please try again.");
                }
        }).catch(error =>{
            console.error("Error fetching stock Data",error);
            setError(error.message ||"An error occurred while fetching data.");
        }).finally(() =>{
            setLoading(false);
        })
    }
    }, [symbol]);

    return (
        <>
            <div className="Dashboard-container">
                <div className="search-container">
                    <Searchbar placeholderValue="Enter a company’s stock ticker symbol (e.g., AAPL for Apple, TSLA for Tesla)"
                               inputValue={searchInput}
                               changeHandler={(e) => setSearchInput(e.target.value)}/>
                    <Button className="dashBoard-button" buttonType="button" handleClick={handleSearchClick}>
                        Search
                    </Button>
                </div>
                {showWelcome && <WelcomeMessage />}
                {error && <div className="error-message">{error}</div>}
                {loading &&(<div className="loading-container">
                    <ClipLoader color="#007bff" size={50}/>
                    </div>)}
                   {stockData && stockData.keyMetrics !== undefined && (
                       <>
                           <div className="card-row">
                               <Card title="Company Summary" className="wide-card">
                                   <p><strong>Name:</strong> {stockData.summary.Name}</p>
                                   <p><strong>Description:</strong> {stockData.summary.Description}</p>
                                   <p><strong>Sector:</strong> {stockData.summary.Sector}</p>
                                   <p><strong>Industry:</strong> {stockData.summary.Industry}</p>
                                   <p><strong>Asset Type:</strong> {stockData.summary.AssetType}</p>
                                   <p><strong>Country:</strong> {stockData.summary.Country}</p>
                               </Card>
                               {stockData.competitors && stockData.competitors.length > 0 && (
                                   <Card title="Competitors" className="wide-card">
                                       <CompetitorList competitors={stockData.competitors}/>
                                   </Card>
                               )}
                           </div>
                           <div className="card-row1">
                               <Card title="Decision & Explanation">
                                   <div>
                                       <strong>Decision: <br/></strong> {stockData.decision}
                                   </div>
                                   <div>
                                       <strong>Explanation: <br/></strong> {stockData.explanation}
                                   </div>
                               </Card>
                           </div>

                           <div className="card-row">
                               <Card title="Profit margin"
                                     value={`${Number(stockData.keyMetrics.profitMargin).toLocaleString()}%`}/>
                               <Card title="Net Income"
                                     value={`$${Number(stockData.keyMetrics.netIncome).toLocaleString()}`}/>
                               <Card title="Total Revenue"
                                     value={`$${Number(stockData.keyMetrics.TotalRevenue).toLocaleString()}`}/>
                           </div>

                           <Card title="Stock OverView" className="stock-card">
                               <div className="chart-container">
                                   <StockPieChart stockData={stockData} chartWidth="700px" chartHeight="500px"/>
                               </div>
                           </Card>
                       </>

                       )
                   }

            </div>
        </>
    )
        ;
}

export default Dashboard;
