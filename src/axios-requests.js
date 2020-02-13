import axios from 'axios';

const API_KEY = 'b96166d9f2f63eb093e30ab408f9e558';

export const axiosLatest = axios.create({
    baseURL: `http://data.fixer.io/api/latest?access_key=${API_KEY}`
});

export const axiosLatestLimited = axios.create({
    baseURL: 'https://api.exchangeratesapi.io/latest?base=USD'
});

export const axiosSymbols = axios.create({
    baseURL: `http://data.fixer.io/api/symbols?access_key=${API_KEY}`
});



// export default instance;