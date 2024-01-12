import axios from "axios";
const BASE_URL = "http://localhost:4060/api"

const AxiosInstance = axios.create({
    baseURL: BASE_URL
})

export default AxiosInstance;