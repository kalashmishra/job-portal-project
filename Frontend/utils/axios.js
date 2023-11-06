import axios from "axios";

const instance = axios.create({
    baseURL:  "https://job-portal-project-19tb.vercel.app/",
    withCredentials: true,
});

export default instance;