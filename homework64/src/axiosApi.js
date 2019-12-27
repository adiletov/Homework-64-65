import axios from 'axios';
const axiosApi = axios.create({
    baseURL: 'https://baseurlhw.firebaseio.com'
});
export default axiosApi;