import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.218.8.166:3333'
});

export {api};