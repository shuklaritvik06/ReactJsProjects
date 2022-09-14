import React,{ createContext,useState} from 'react';
import { CryptoApi } from '../api/CryptoApi';

export const AppProvider = createContext(null);

export default function ContextProvider({children}){
    const [coin,setCoins] = useState([]);
    const [details,setDetails] = useState({});
    const getCoins = async ()=>{
        const response = await CryptoApi.get("/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
        return response.data;
    }
    const getCoinDetails = async (coin)=>{
        const response = await CryptoApi.get(`/${coin}`);
        return response.data;
    }
    return (
        <AppProvider.Provider value={{coin,setCoins,getCoins,getCoinDetails,details,setDetails}}>
            {children}
        </AppProvider.Provider>
    );
}