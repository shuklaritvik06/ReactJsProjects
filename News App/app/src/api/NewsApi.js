import axios from "axios";

export const NewsApi = axios.create({
    baseURL: "https://newsapi.org/v2/",
    headers: {
        Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
    }
})