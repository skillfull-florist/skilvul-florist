import axios from 'axios';

export const baseUrl = 'https://62ccda84a080052930b0b2ab.mockapi.io/toko/bunga';
const mockapi = axios.create({ baseURL: baseUrl });

export default mockapi;
