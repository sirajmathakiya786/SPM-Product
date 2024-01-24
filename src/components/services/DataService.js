import axios from "axios";
const BASE_URL = "http://localhost:4060/api"

const AxiosInstance = axios.create({
    baseURL: BASE_URL
})

const getToken = () => {
    return localStorage.getItem("token");
  };

  AxiosInstance.interceptors.request.use(
    (config) => {
      const token = getToken();
      console.log(token,"token")
      if (token) {
        config.headers.auth = token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
export default AxiosInstance;