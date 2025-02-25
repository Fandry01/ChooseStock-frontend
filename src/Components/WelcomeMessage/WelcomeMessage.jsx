import {motion} from 'framer-motion'
import './WelcomeMessage.css'

function WelcomeMessage() {
    return (
        <motion.div className="welcome-container"
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
        >
            <h1>
                Welcome to Stock Analyzer !
            </h1>
            <h3>
                With StockAnalyzer, you can easily analyze a company's financial data and make more informed investment
                decisions.
            </h3>
            <h4>
                How does it work?
            </h4>
            <ul>
                <li>1.Enter a company’s stock ticker symbol (e.g., AAPL for Apple, TSLA for Tesla).</li>
                <li>2.Click "Search", and let our AI analyze the financials.</li>
                <li>3.View key financial metrics such as profit, revenue, and liabilities.</li>
                <li>4.Get AI-powered investment recommendations: Buy, Sell, or Hold.</li>
                <li>5.Compare competitors and spot market trends.</li>
            </ul>
            <h4>
                Why use StockAnalyzer?
            </h4>
            <ul>
                <li>✔️ AI-driven analysis based on real-time financial data.</li>
                <li> ✔️ Clear and visual representation of company performance.</li>
                <li>✔️ Intuitive interface with a modern and dynamic user experience.</li>
            </ul>
            <p>Start exploring new investment opportunities today!</p>


        </motion.div>
    );
}

export default WelcomeMessage;
