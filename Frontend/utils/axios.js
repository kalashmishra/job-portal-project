import axios from "axios";

const instance = axios.create({
    baseURL:  "https://job-portal-kvha.onrender.com/",
    withCredentials: true,
});

export default instance;