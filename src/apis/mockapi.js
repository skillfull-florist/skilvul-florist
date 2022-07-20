import axios from 'axios';

export const baseUrl = 'https://62bd2977bac21839b6fd61be.mockapi.io/api';
const mockapi = axios.create({ baseURL: baseUrl });

export default mockapi;
