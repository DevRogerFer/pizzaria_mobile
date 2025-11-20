import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.163.34.166:3333'
    //baseURL: 'https://web-production-a5f94.up.railway.app'
});

export {api};