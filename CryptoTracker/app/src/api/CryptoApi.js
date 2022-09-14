import axios from "axios";

export const CryptoApi = axios.create({
    baseURL: "https://api.coingecko.com/api/v3/coins"
})