import axios from 'axios';

const API_BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_BuakAzQeObKZS1TKacNXeMxUplyPnjaLyIG9jaIFDqqtp6jm7iQEKkOacpqMfErl'; // Ganti dengan API key Anda

export const getCats = async (param) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/breeds?limit=${param}`, {
            headers: {
                'x-api-key': API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch cats');
    }
};
