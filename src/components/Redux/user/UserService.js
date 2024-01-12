import AxiosInstance from "../../services/DataService"

const userService = {
    register: async(data)=>{
        try {
            const response = await AxiosInstance.post('/users/register', data);
            return response.data
        } catch (error) {
            throw error;
        }
    },
    login: async(data) =>{
        try {
            const response = await AxiosInstance.post('/users/login', data)
            return response.data;
        } catch (error) {
            throw error
        }
    }
}

export default userService;