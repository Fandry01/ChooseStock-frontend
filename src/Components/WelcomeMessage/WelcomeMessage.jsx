import {motion} from 'framer-motion'
import './WelcomeMessage.css'

function WelcomeMessage() {
    return (
        <motion.div className="welcome-container"
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
        >
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
        </motion.div>
    );
}

export default WelcomeMessage;
