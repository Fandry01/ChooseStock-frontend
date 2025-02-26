import React from 'react';
import Button from "../../Components/Button/Button.jsx";
import {useNavigate} from "react-router-dom";
import './home.css'

function Home() {
    const navigate = useNavigate()
    const navigateToDashboard = () => {
        // 👇️ navigate to /register
        navigate('/dashboard');
    };
    return (
        <>
            <div className="hero-section">
                {/*    heroSection*/}
                <div className="opacity-layer"></div>
                <h1>Stock Analyzer</h1>
                <h3>Analyze a company's financial data effortlessly with StockAnalyzer and make informed investment
                    decisions.</h3>
                <h4>We simplify stock investments with easy-to-understand financial overviews, giving you the insights
                    you need to make smart choices.</h4>
                <Button handleClick={navigateToDashboard} className="cta-button">
                    Try it !
                </Button>
            </div>
        </>
    );
}

export default Home;
