import axios from 'axios';
import { baseUrl } from './constants/Constants'

//creating an axios instance - https://www.npmjs.com/package/axios#creating-an-instance
const instance = axios.create({
    baseURL: baseUrl,
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

export default instance;