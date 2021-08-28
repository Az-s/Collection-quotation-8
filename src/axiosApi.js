import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'https://az-sa-bd3f9-default-rtdb.firebaseio.com/'
});

export default axiosApi;