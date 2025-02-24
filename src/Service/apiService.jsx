import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/analyze";

export const fetchStockData = async (symbol) =>{
    try {
        const response = await axios.get(`${API_BASE_URL}/${symbol}`);
        console.log('API Response:', response.data);
        return response.data;
    }catch (error){
        console.error("Error fetching stock data",error);
        return null;
    }
};
