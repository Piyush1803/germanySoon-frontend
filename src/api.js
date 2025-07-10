import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export const getExampleData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/data`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};
