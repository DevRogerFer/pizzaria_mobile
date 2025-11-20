import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://10.163.34.166:3333', // Desenvolvimento local
    baseURL: 'https://web-production-a5f94.up.railway.app', // Produção
    timeout: 10000 // 10 segundos
});

export {api};