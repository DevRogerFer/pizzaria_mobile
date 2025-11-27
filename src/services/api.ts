import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
    //baseURL: 'http://10.237.104.166:3333', // Desenvolvimento local
     baseURL: 'https://web-production-a5f94.up.railway.app', // Produção
    timeout: 10000 // 10 segundos
});

// Interceptor para adicionar token em todas as requisições
api.interceptors.request.use(
    async (config) => {
        const userInfo = await AsyncStorage.getItem('@pizzaria');
        if (userInfo) {
            const user = JSON.parse(userInfo);
            if (user.token) {
                config.headers.Authorization = `Bearer ${user.token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export {api};