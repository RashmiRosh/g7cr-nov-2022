import axios from 'axios'
const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api/products',
    timeout: 5000,
    timeoutErrorMessage: 'Operation timed out'
})
export default axiosInstance